import React from "react";
import { AnalysisMetadata } from "@/types/dashboard";
import { Cpu, Clock, FileText, Calendar } from "lucide-react";

interface Props {
  metadata: AnalysisMetadata;
}

export default function MetadataBar({ metadata }: Props) {
  const formattedDate = metadata?.timestamp
    ? new Date(metadata.timestamp).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "N/A";

  return (
    <div className="flex flex-wrap items-center gap-4 py-3 px-1 border-b border-gray-200 dark:border-gray-800/60 mb-6">
      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <Cpu size={14} className="text-gray-400 dark:text-gray-500" />
        Model:{" "}
        <span className="text-gray-700 dark:text-gray-300">
          {metadata.model}
        </span>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <Clock size={14} className="text-gray-400 dark:text-gray-500" />
        Time:{" "}
        <span className="text-gray-700 dark:text-gray-300">
          {metadata.processingTimeMs}ms
        </span>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <FileText size={14} className="text-gray-400 dark:text-gray-500" />
        Length:{" "}
        <span className="text-gray-700 dark:text-gray-300">
          {metadata.lengthChars} chars
        </span>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <Calendar size={14} className="text-gray-400 dark:text-gray-500" />
        Generated:{" "}
        <span className="text-gray-700 dark:text-gray-300">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
