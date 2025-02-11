import React from 'react';
import { X } from 'lucide-react';
import { CareerPath } from '../types';

interface CareerModalProps {
  career: CareerPath;
  onClose: () => void;
}

export function CareerModal({ career, onClose }: CareerModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {career.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {career.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Average Salary
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {career.averageSalary}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Time to Learn
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {career.timeToLearn}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Market Demand
              </h4>
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

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Prerequisites
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {career.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {career.techStacks.map((stack, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {stack.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {stack.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Companies Using This Stack
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {stack.companies.map((company, idx) => (
                        <li key={idx}>{company}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Key Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Learning Resources
                  </h4>
                  <ul className="space-y-2">
                    {stack.resources.map((resource, idx) => (
                      <li key={idx}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {resource.title}
                        </a>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          ({resource.type})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}