import React from "react";
import { Gap } from "@/types/dashboard";
import { TriangleAlert, AlertCircle } from "lucide-react";

interface Props {
  gaps: Gap[];
}

export default function GapAnalysisCard({ gaps }: Props) {
  if (gaps.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <TriangleAlert size={16} className="text-amber-500" />
          Gap Analysis
        </h3>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full font-medium border border-amber-200/50 dark:border-amber-800/50">
          {gaps.length} areas missing
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {gaps.map((gap, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-900/10"
          >
            <AlertCircle size={16} className="text-amber-500 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                {gap.dimension}
              </span>
              <p className="text-xs text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
                {gap.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
