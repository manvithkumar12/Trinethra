import React from 'react';
import { OperationalAssessment } from '@/types/dashboard';
import { Layers } from 'lucide-react';

interface Props {
  assessment: OperationalAssessment;
}

export default function OperationalAssessmentCard({ assessment }: Props) {
  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-6">
        <Layers size={16} className="text-gray-400" />
        Operational Assessment
      </h3>

      <div className="space-y-4">
        {/* Layer 1 */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Layer 1 (Execution)
            </span>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
              {assessment.layer1Score}%
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${assessment.layer1Score}%` }}
            ></div>
          </div>
        </div>

        {/* Layer 2 */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Layer 2 (Systems Building)
            </span>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
              {assessment.layer2Score}%
            </span>
          </div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${assessment.layer2Score}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800/80">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {assessment.explanation}
        </p>
      </div>
    </div>
  );
}
