import React from 'react';
import { FollowUpQuestion } from '@/types/dashboard';
import { MessageSquarePlus, Target } from 'lucide-react';

interface Props {
  questions: FollowUpQuestion[];
}

export default function FollowUpQuestionsCard({ questions }: Props) {
  if (questions.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#111318] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
        <MessageSquarePlus size={16} className="text-gray-400" />
        Follow-up Questions
      </h3>

      <div className="flex flex-col gap-4">
        {questions.map((q, index) => (
          <div key={q.id} className="relative pl-8">
            {/* Number indicator */}
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs font-semibold">
              {index + 1}
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                {q.question}
              </p>
              
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold border border-gray-200 dark:border-gray-700">
                  <Target size={10} />
                  Targeting: {q.targetGap}
                </span>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span className="font-semibold">Looking for:</span> {q.lookingFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
