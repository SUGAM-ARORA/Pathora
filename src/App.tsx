import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { CareerCard } from './components/CareerCard';
import { CareerModal } from './components/CareerModal';
import { careerPaths } from './data/careerPaths';
import { Theme, CareerPath } from './types';
import { Search } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const filteredCareers = careerPaths.filter(career =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors ${theme}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Pathora
            </h1>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your Tech Career Path
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Explore various career paths in technology, understand the required skills,
            and learn about the companies that hire for these roles.
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search career paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map(career => (
            <CareerCard
              key={career.id}
              career={career}
              onClick={setSelectedCareer}
            />
          ))}
        </div>

        {selectedCareer && (
          <CareerModal
            career={selectedCareer}
            onClose={() => setSelectedCareer(null)}
          />
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © 2025 Pathora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;