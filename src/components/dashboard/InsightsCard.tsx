import React from 'react';
import { Insights } from '@/types/dashboard';
import { Lightbulb, Network, Eye, Activity } from 'lucide-react';

interface Props {
  insights: Insights;
}

export default function InsightsCard({ insights }: Props) {
  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
        <Lightbulb size={16} className="text-gray-400" />
        Transcript Insights
      </h3>

      <div className="flex flex-col">
        {/* Layer Balance */}
        <div className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-gray-800/60 last:border-0">
          <div className="p-1 rounded bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 mt-0.5 shrink-0">
            <Network size={14} />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-0.5">Layer Balance</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{insights.layer1VsLayer2}</p>
          </div>
        </div>

        {/* Detected Bias */}
        <div className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-gray-800/60 last:border-0">
          <div className="p-1 rounded bg-amber-50 dark:bg-amber-900/20 text-amber-500 mt-0.5 shrink-0">
            <Eye size={14} />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-0.5">Detected Bias</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{insights.supervisorBias}</p>
          </div>
        </div>

        {/* Survivability Test */}
        <div className="flex items-start gap-3 py-3 last:border-0">
          <div className="p-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-500 mt-0.5 shrink-0">
            <Activity size={14} />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-0.5">Survivability Test</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{insights.survivabilityResult}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
