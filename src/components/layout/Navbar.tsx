import React from 'react';
import { Sparkles, User, BadgeAlert } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-black">
          <Sparkles size={18} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm tracking-tight text-gray-900 dark:text-gray-100">
            Trinethra
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Supervisor Feedback Analyzer
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          AI-assisted draft
        </div>
        <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 overflow-hidden">
          <User size={16} />
        </div>
      </div>
    </nav>
  );
}
