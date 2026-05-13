import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  onRetry: () => void;
}

export default function ErrorState({ onRetry }: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-[#111318] rounded-2xl border border-red-200 dark:border-red-900/30">
      <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
        <AlertTriangle size={24} className="text-red-500" />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Analysis Failed
      </h3>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
          There was an error connecting to the local AI model.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6">
          Please try again later.
        </p>
      </div>

      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
      >
        <RotateCcw size={16} />
        Retry Analysis
      </button>
    </div>
  );
}
