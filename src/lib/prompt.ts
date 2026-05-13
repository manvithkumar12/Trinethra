export function buildAnalysisPrompt(transcript: string) {
  return `
You are an organizational psychology analyst at DeepThought.

Analyze the DT Fellow supervisor transcript.

SCORING RULES:

Layer 1 = execution
- follow-ups
- coordination
- task completion
- responsiveness

Layer 2 = systems building
- SOPs
- trackers
- workflows
- dashboards
- scalable improvements

IMPORTANT:
- Layer 1 alone MUST NOT score above 6
- Score 7+ requires:
  - independent problem identification
  - systems thinking
  - proactive improvements

FALSE HIGH PERFORMANCE:
- staying late
- handling everything personally
- founder dependency
- firefighting
- being very helpful

These are NOT strong systems-building signals.

SURVIVABILITY TEST:
"If the Fellow left tomorrow, would the system continue running?"

REFERENCE EXAMPLES:

Karthik:
Mostly execution + coordination.
One improvement signal only.
Expected score: 6-7.

Meena:
Built trackers, identified rejection patterns,
saved shipment proactively.
Expected score: 7-8.

Anil:
Founder dependency and task absorption.
Helpful but not scalable systems.
Expected score: 5-6.

Allowed KPIs:
- Lead Generation
- Lead Conversion
- Upselling
- Cross-selling
- NPS
- PAT
- TAT
- Quality

Examples:
- faster dispatch = TAT
- reduced waste = PAT
- fewer complaints = Quality/NPS

OUTPUT:
Return ONLY valid JSON.

LIMITS:
- max 2 evidence items
- max 2 KPIs
- max 2 gaps
- max 2 follow-up questions
- short explanations

JSON:

{
  "score": number,
  "scoreLabel": string,
  "band": string,
  "confidence": "Low" | "Medium" | "High",
  "justification": string,

  "evidence": [
    {
      "quote": string,
      "signal": "Positive" | "Negative" | "Neutral",
      "dimension": "Execution" | "Systems Building" | "KPI Impact" | "Change Management",
      "interpretation": string
    }
  ],

  "kpis": [
    {
      "name": string,
      "evidence": string,
      "tag": "System" | "Personal"
    }
  ],

  "gaps": [
    {
      "dimension": string,
      "detail": string
    }
  ],

  "followUpQuestions": [
    {
      "question": string,
      "targetGap": string
    }
  ],

  "operationalAssessment": {
    "layer1Score": number,
    "layer2Score": number
  }
}

TRANSCRIPT:
${transcript}
`;
}
