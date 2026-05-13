import React from "react";
import { AnalysisResult } from "@/types/dashboard";
import {
  Target,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Shield,
} from "lucide-react";

interface Props {
  result: AnalysisResult;
}

export default function AnalysisSummaryCard({ result }: Props) {
  const score = typeof result?.score === "number" ? result.score : 0;

  const scoreLabel =
    typeof result?.scoreLabel === "string" ? result.scoreLabel : "Unknown";

  const band = typeof result?.band === "string" ? result.band : "Unknown";

  const confidence =
    typeof result?.confidence === "string" ? result.confidence : "Low";

  const justification =
    typeof result?.justification === "string"
      ? result.justification
      : "No justification available.";

  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case "High":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200/50 dark:border-emerald-800/50">
            <ShieldCheck size={14} />
            High Confidence
          </div>
        );

      case "Medium":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-200/50 dark:border-amber-800/50">
            <Shield size={14} />
            Medium Confidence
          </div>
        );

      case "Low":
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 text-xs font-semibold border border-rose-200/50 dark:border-rose-800/50">
            <ShieldAlert size={14} />
            Low Confidence
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 flex flex-col justify-between h-full">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className="flex items-baseline gap-0.5">
            <span className="text-6xl font-bold tracking-tighter text-gray-900 dark:text-white leading-none">
              {score}
            </span>

            <span className="text-2xl text-gray-400 dark:text-gray-500 font-medium">
              /10
            </span>
          </div>

          <div className="flex flex-col gap-1 border-l border-gray-200 dark:border-gray-800 pl-5">
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
              <Target size={16} className="text-blue-500" />
              {scoreLabel}
            </span>

            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Band: {band}
            </span>
          </div>
        </div>

        {getConfidenceBadge(confidence)}
      </div>

      <div className="bg-gray-50/80 dark:bg-[#0f1115]/80 rounded-xl p-3.5 border border-gray-100 dark:border-gray-800/60">
        <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <CheckCircle2 size={12} />
          Justification
        </h4>

        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          {justification}
        </p>
      </div>
    </div>
  );
}
