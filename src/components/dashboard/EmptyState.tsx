import React from 'react';
import { SearchCode } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="w-16 h-16 bg-gray-50 dark:bg-[#0f1115] border border-gray-100 dark:border-gray-800/60 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <SearchCode size={28} className="text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
        Awaiting Transcript
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
        Paste a supervisor transcript to generate structured organizational insights.
      </p>
    </div>
  );
}
