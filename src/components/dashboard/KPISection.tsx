import React from "react";
import { KPI } from "@/types/dashboard";
import { BarChart3, Box, User2 } from "lucide-react";

interface Props {
  kpis: KPI[];
}

export default function KPISection({ kpis }: Props) {
  return (
    <div className="bg-white h-max pb-12 dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
        <BarChart3 size={16} className="text-gray-400" />
        KPI Mapping
      </h3>

      <div className="flex flex-col flex-wrap gap-4 h-full">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="flex h-max w-[95%] flex-col p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0f1115]/50 hover:bg-white dark:hover:bg-gray-800/50 hover:shadow-sm transition-all duration-200 cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {kpi.name}
              </span>
              <span
                className={`flex items-center gap-1 text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border ${
                  kpi.tag === "System"
                    ? "bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/30"
                    : "bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/30"
                }`}
              >
                {kpi.tag === "System" ? <Box size={10} /> : <User2 size={10} />}
                {kpi.tag}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed mt-auto">
              {kpi.evidence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
