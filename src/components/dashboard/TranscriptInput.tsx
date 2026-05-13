import React from "react";
import { Play, RotateCcw, FileText, AlertCircle, Loader2 } from "lucide-react";

interface TranscriptInputProps {
  transcript: string;
  setTranscript: (text: string) => void;
  onRunAnalysis: () => void;
  onClear: () => void;
  onLoadSample: (transcript: string) => void;
  sampleTranscripts: any[];
  isLoading: boolean;
}

export default function TranscriptInput({
  transcript,
  setTranscript,
  onRunAnalysis,
  onClear,
  onLoadSample,
  sampleTranscripts,
  isLoading,
}: TranscriptInputProps) {
  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 flex flex-col h-[calc(100vh-8rem)] sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <FileText size={16} className="text-gray-400" />
          Supervisor Transcript
        </h2>
        <span className="text-xs text-gray-500">
          {transcript.length} characters
        </span>
      </div>

      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Paste supervisor feedback transcript here..."
        className="flex-1 w-full bg-gray-50 dark:bg-[#0f1115] border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
      />

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onRunAnalysis}
            disabled={isLoading || transcript.trim().length === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-2.5 px-4 rounded-xl hover:bg-black dark:hover:bg-white transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm active:scale-[0.98]"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Play size={16} />
            )}
            {isLoading ? "Analyzing..." : "Run Analysis"}
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClear}
            disabled={isLoading || transcript.length === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs active:scale-[0.98]"
          >
            <RotateCcw size={14} />
            Clear
          </button>
          <select
            onChange={(e) => {
              const selected = sampleTranscripts.find(
                (item) => item.id === e.target.value,
              );

              if (selected) {
                onLoadSample(selected.transcript);
              }
            }}
            className="flex-1 bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium py-2 px-3 rounded-xl text-xs"
          >
            <option value="">Load Sample Transcript</option>

            {sampleTranscripts.map((item, index) => (
              <option key={index} value={item.id}>
                {item.fellow.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2.5 bg-gray-50/80 dark:bg-[#0f1115]/80 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800/60">
        <AlertCircle size={14} className="text-gray-500 mt-0.5 shrink-0" />
        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
          AI-generated draft. Human review is required before finalizing
          assessments.
        </p>
      </div>
    </div>
  );
}
