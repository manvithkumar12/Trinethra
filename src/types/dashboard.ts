export type Signal = "Positive" | "Negative" | "Neutral";

export type Dimension =
  | "Execution"
  | "Systems Building"
  | "KPI Impact"
  | "Change Management";

export type Confidence = "Low" | "Medium" | "High";

export interface OperationalAssessment {
  layer1Score: number;
  layer2Score: number;
  explanation: string;
}

export interface AnalysisMetadata {
  model: string;
  processingTimeMs: number;
  lengthChars: number;
  timestamp: string;
}

export interface EvidenceItem {
  id: string;
  quote: string;
  signal: Signal;
  dimension: Dimension;
  interpretation: string;
}

export interface KPI {
  id: string;
  name: string;
  evidence: string;
  tag: "System" | "Personal";
}

export interface Gap {
  id: string;
  dimension: string;
  detail: string;
}

export interface FollowUpQuestion {
  id: string;
  question: string;
  targetGap: string;
  lookingFor: string;
}

export interface Insights {
  layer1VsLayer2: string;
  supervisorBias: string;
  survivabilityResult: string;
}

export interface AnalysisResult {
  score: number;
  scoreLabel: string;
  band: string;
  confidence: Confidence;
  justification: string;

  evidence: EvidenceItem[];

  kpis: KPI[];

  gaps: Gap[];

  followUpQuestions: FollowUpQuestion[];

  insights?: Insights;

  operationalAssessment: OperationalAssessment;

  metadata: AnalysisMetadata;

  raw?: string;
}