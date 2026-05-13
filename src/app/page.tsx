"use client";

import React, { useState } from "react";

import Navbar from "@/components/layout/Navbar";

import TranscriptInput from "@/components/dashboard/TranscriptInput";
import AnalysisSummaryCard from "@/components/dashboard/AnalysisSummaryCard";
import EvidenceCard from "@/components/dashboard/EvidenceCard";
import KPISection from "@/components/dashboard/KPISection";
import GapAnalysisCard from "@/components/dashboard/GapAnalysisCard";
import FollowUpQuestionsCard from "@/components/dashboard/FollowUpQuestionsCard";
import InsightsCard from "@/components/dashboard/InsightsCard";
import OperationalAssessmentCard from "@/components/dashboard/OperationalAssessmentCard";
import MetadataBar from "@/components/dashboard/MetadataBar";
import transcriptsData from "@/data/sample-transcripts.json";
import EmptyState from "@/components/dashboard/EmptyState";
import LoadingState from "@/components/dashboard/LoadingState";
import ErrorState from "@/components/dashboard/ErrorState";

import { AnalysisResult } from "@/types/dashboard";

import { fetchResponse } from "./services/fetchResponse";

import toast from "react-hot-toast";

type Status = "empty" | "loading" | "error" | "success";

export default function Dashboard() {
  const [status, setStatus] = useState<Status>("empty");

  const [transcript, setTranscript] = useState("");
  const transcripts = transcriptsData.transcripts;
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleRunAnalysis = async () => {
    if (!transcript.trim()) {
      toast.error("Please paste a transcript");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetchResponse(transcript);

      setResult(response);

      setStatus("success");

      toast.success("Analysis completed");
    } catch (error) {
      console.error(error);

      toast.error("Failed to analyze transcript");

      setStatus("error");
    }
  };

  const handleClear = () => {
    setTranscript("");
    setResult(null);
    setStatus("empty");
  };

  const handleLoadSample = (transcript: string) => {
    setTranscript(transcript);
  };
  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#0f1115] text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <TranscriptInput
              transcript={transcript}
              setTranscript={setTranscript}
              onRunAnalysis={handleRunAnalysis}
              onClear={handleClear}
              onLoadSample={handleLoadSample}
              sampleTranscripts={transcripts}
              isLoading={status === "loading"}
            />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {status === "empty" && <EmptyState />}

            {status === "loading" && <LoadingState />}

            {status === "error" && <ErrorState onRetry={handleRunAnalysis} />}

            {status === "success" && result && (
              <>
                <MetadataBar metadata={result.metadata} />

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2">
                    <AnalysisSummaryCard result={result} />
                  </div>

                  {result.operationalAssessment && (
                    <OperationalAssessmentCard
                      assessment={result.operationalAssessment}
                    />
                  )}
                </div>

                <div className="flex flex-col  gap-6">
                  <EvidenceCard evidence={result.evidence} />

                  <div className="flex flex-col gap-6">
                    <KPISection kpis={result.kpis} />

                    {result.insights && (
                      <InsightsCard insights={result.insights} />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <GapAnalysisCard gaps={result.gaps} />

                  <FollowUpQuestionsCard questions={result.followUpQuestions} />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
