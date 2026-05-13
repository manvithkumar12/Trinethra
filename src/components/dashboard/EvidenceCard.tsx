import React from "react";
import { EvidenceItem } from "@/types/dashboard";
import { Quote, Tag } from "lucide-react";

interface Props {
  evidence: EvidenceItem[];
}

export default function EvidenceCard({ evidence }: Props) {
  const getSignalColors = (signal: string) => {
    switch (signal) {
      case "Positive":
        return "border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10";
      case "Negative":
        return "border-l-rose-500 bg-rose-50/50 dark:bg-rose-900/10";
      case "Neutral":
      default:
        return "border-l-gray-400 bg-gray-50/80 dark:bg-gray-800/30";
    }
  };

  const getBadgeColors = (signal: string) => {
    switch (signal) {
      case "Positive":
        return "text-emerald-700 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/30 border-emerald-200/50 dark:border-emerald-800/30";
      case "Negative":
        return "text-rose-700 dark:text-rose-400 bg-rose-100/50 dark:bg-rose-900/30 border-rose-200/50 dark:border-rose-800/30";
      case "Neutral":
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700/50";
    }
  };

  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Quote size={16} className="text-gray-400" />
          Extracted Evidence
        </h3>
        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full font-medium">
          {evidence?.length} items
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {evidence.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border-y border-r border-gray-100 dark:border-gray-800/80 border-l-4 transition-colors ${getSignalColors(
              item.signal,
            )}`}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${getBadgeColors(
                  item.signal,
                )}`}
              >
                {item.signal}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                <Tag size={10} />
                {item.dimension}
              </span>
            </div>

            <p className="text-base text-gray-900 dark:text-gray-100 font-medium leading-relaxed mb-3">
              "{item.quote}"
            </p>

            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium bg-white/60 dark:bg-black/20 p-2 rounded-lg inline-block">
              {item.interpretation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
