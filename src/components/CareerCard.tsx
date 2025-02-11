import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CareerPath } from '../types';

interface CareerCardProps {
  career: CareerPath;
  onClick: (career: CareerPath) => void;
}

export function CareerCard({ career, onClick }: CareerCardProps) {
  return (
    <div 
      className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
      onClick={() => onClick(career)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {career.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {career.description}
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">Salary:</span>
              <span className="ml-2">{career.averageSalary}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">Time to Learn:</span>
              <span className="ml-2">{career.timeToLearn}</span>
            </div>
            <div className="flex items-center text-sm">
              <span className={`px-2 py-1 rounded-full text-xs ${
                career.demandLevel === 'High' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : career.demandLevel === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {career.demandLevel} Demand
              </span>
            </div>
          </div>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  );
}