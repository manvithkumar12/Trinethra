import { NextRequest, NextResponse } from "next/server";
import { buildAnalysisPrompt } from "@/lib/prompt";
import { fetchOllama } from "@/app/services/fetchOllama";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const transcript = body.transcript;

    if (!transcript) {
      return NextResponse.json(
        { error: "Transcript required" },
        { status: 400 },
      );
    }

    const prompt = buildAnalysisPrompt(transcript);

    const ollamaResponse = await fetchOllama(prompt);

    const data = await ollamaResponse.json();
    const rawResponse = data.response;
    let parsedResponse;

    try {
      const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        throw new Error("No JSON found");
      }

      let cleanedJson = jsonMatch[0]
        .replace(/[\u0000-\u001F]+/g, "")
        .replace(/\n/g, " ")
        .replace(/\r/g, " ")
        .replace(/\t/g, " ")
        .replace(/,\s*}/g, "}")
        .replace(/,\s*]/g, "]");

      parsedResponse = JSON.parse(cleanedJson);
    } catch (e) {
      console.error("JSON Parse Error:", e);

      console.log("RAW RESPONSE:");
      console.log(rawResponse);

      return NextResponse.json(
        {
          error: "Failed to parse AI response",
          raw: rawResponse,
        },
        { status: 500 },
      );
    }
    return NextResponse.json({
      ...parsedResponse,
      metadata: {
        model: "llama3.2",
        timestamp: new Date().toISOString(),
        analysisTime: "11s",
      },

      raw: rawResponse,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "AI analysis failed" }, { status: 500 });
  }
}
