import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Cpu,
  Terminal,
  FileJson,
  Clock,
  AlertCircle,
} from "lucide-react";

const STEPS = [
  "Extracting behavioral evidence...",
  "Detecting systems-building signals...",
  "Mapping operational KPIs...",
  "Evaluating execution vs systems thinking...",
  "Checking survivability indicators...",
  "Detecting supervisor bias...",
  "Generating follow-up questions...",
  "Finalizing structured assessment...",
];

export default function LoadingState() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white dark:bg-[#111318] rounded-2xl border border-blue-500/20 overflow-hidden shadow-[0_0_40px_-15px_rgba(59,130,246,0.18)]"
      >
        {/* HEADER */}
        <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
            {/* LEFT */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Analyzing Supervisor Feedback
              </h2>

              <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Generating structured behavioral assessment using local AI
                inference and operational analysis logic.
              </p>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-2 lg:items-end">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 text-xs font-semibold whitespace-nowrap">
                <Clock size={12} />
                Typical analysis time: 20–25s
              </div>

              <div className="px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/40 text-[10px] sm:text-[11px] uppercase tracking-wide font-bold text-amber-600 dark:text-amber-500 whitespace-nowrap">
                Speed depends on your system (Local Ollama)
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6 pt-4 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <Cpu size={14} />
              Model:
              <span className="text-gray-900 dark:text-gray-200">llama3.2</span>
            </div>

            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <Terminal size={14} />
              Runtime:
              <span className="text-gray-900 dark:text-gray-200">
                Local Ollama
              </span>
            </div>

            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <FileJson size={14} />
              Output:
              <span className="text-gray-900 dark:text-gray-200">
                Structured JSON
              </span>
            </div>
          </div>
        </div>

        {/* STEPS */}
        <div className="p-6 md:p-8 bg-gray-50/40 dark:bg-[#0b0d11]">
          <div className="relative ml-2 border-l border-gray-200 dark:border-gray-800 pl-6 space-y-6">
            {STEPS.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isUpcoming = index > currentStepIndex;

              return (
                <div key={index} className="relative">
                  {/* DOT */}
                  <div className="absolute -left-[33px] top-0">
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white"
                      >
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </motion.div>
                    ) : isCurrent ? (
                      <div className="relative w-5 h-5 rounded-full border border-blue-500 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <div className="absolute w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800" />
                    )}
                  </div>

                  {/* TEXT */}
                  <div
                    className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                      isCompleted
                        ? "text-emerald-500"
                        : isCurrent
                        ? "text-gray-900 dark:text-gray-100 font-medium"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {step}

                    {isCurrent && (
                      <Loader2
                        size={13}
                        className="animate-spin text-blue-500"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#111318] flex items-center justify-center gap-2">
          <AlertCircle size={14} className="text-gray-400" />

          <p className="text-xs text-center text-gray-500 dark:text-gray-400 font-medium">
            AI-generated draft. Human review required before finalizing
            assessment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
