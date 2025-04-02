import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { CareerCard } from './components/CareerCard';
import { CareerModal } from './components/CareerModal';
import { careerPaths } from './data/careerPaths';
import { Theme, CareerPath } from './types';
import { Search } from 'lucide-react';

const resumeLinks = [
  { title: 'Software Engineer Resume', url: 'https://www.overleaf.com/latex/templates/swe-resume-template/bznbzdprjfyy' },
  { title: 'Web Developer Resume', url: 'https://www.canva.com/resumes/templates/web-developer/' },
  { title: 'AI Engineer Resume', url: 'https://resumegenius.com/resume-samples/artificial-intelligence-engineer-resume-example' },
  { title: 'Cloud Engineer Resume', url: 'https://enhancv.com/resume-examples/cloud-engineer/' },
  { title: 'MLOps Engineer Resume', url: 'https://www.novoresume.com/career-blog/mlops-engineer-resume' },
];

const salaryRanges = [
  { id: 'all', label: 'All Salary Ranges' },
  { id: 'entry', label: 'Entry Level (< $90k)', min: 0, max: 90000 },
  { id: 'mid', label: 'Mid Level ($90k - $150k)', min: 90000, max: 150000 },
  { id: 'senior', label: 'Senior Level ($150k - $250k)', min: 150000, max: 250000 },
  { id: 'executive', label: 'Executive Level (> $250k)', min: 250000, max: Infinity },
];

const timeToLearnOptions = [
  { id: 'all', label: 'Any Duration' },
  { id: 'short', label: 'Short (< 6 months)', max: 6 },
  { id: 'medium', label: 'Medium (6-12 months)', min: 6, max: 12 },
  { id: 'long', label: 'Long (12-24 months)', min: 12, max: 24 },
  { id: 'extensive', label: 'Extensive (> 24 months)', min: 24 },
];

function parseTimeToLearn(timeString: string): { min: number; max: number } {
  const numbers = timeString.match(/\d+/g)?.map(Number) || [];
  return {
    min: numbers[0] || 0,
    max: numbers[1] || numbers[0] || 0
  };
}

function parseSalary(salaryString: string): { min: number; max: number } {
  const cleaned = salaryString.replace(/[^\d-]/g, '');
  const numbers = cleaned.split('-').map(s => parseInt(s, 10));
  return {
    min: numbers[0] || 0,
    max: numbers[1] || numbers[0] || 0
  };
}

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('all');
  const [selectedTimeToLearn, setSelectedTimeToLearn] = useState('all');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const filteredCareers = careerPaths.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) || career.description.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesSalary = true;
    if (selectedSalaryRange !== 'all') {
      const range = salaryRanges.find(r => r.id === selectedSalaryRange);
      if (range) {
        const careerSalary = parseSalary(career.averageSalary);
        matchesSalary = careerSalary.min <= range.max && careerSalary.max >= range.min;
      }
    }

    let matchesTime = true;
    if (selectedTimeToLearn !== 'all') {
      const timeOption = timeToLearnOptions.find(t => t.id === selectedTimeToLearn);
      if (timeOption) {
        const careerTime = parseTimeToLearn(career.timeToLearn);
        if (timeOption.min !== undefined && timeOption.max !== undefined) {
          matchesTime = careerTime.min >= timeOption.min && careerTime.max <= timeOption.max;
        } else if (timeOption.max !== undefined) {
          matchesTime = careerTime.max < timeOption.max;
        } else if (timeOption.min !== undefined) {
          matchesTime = careerTime.min > timeOption.min;
        }
      }
    }

    return matchesSearch && matchesSalary && matchesTime;
  });

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors ${theme}`}>
      <nav className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-800">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pathora</h1>
            <div className='flex items-center gap-4'>
              <a href="https://github.com/SUGAM-ARORA/Pathora" target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors border-2 border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Github
              </a>
              <button onClick={() => setShowResumeModal(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors border-2 border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800">
                📄 Build your Resume
              </button>
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Discover Your Tech Career Path</h2>

        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
          <div>
            <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Search career paths</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input type="text" id="search" placeholder="Search by title or description..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent" />
            </div>
          </div>

          <div>
            <label htmlFor="salary-range" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Filter by salary range</label>
            <select id="salary-range" value={selectedSalaryRange} onChange={(e) => setSelectedSalaryRange(e.target.value)} className="w-full py-3 pl-4 pr-10 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent">
              {salaryRanges.map(range => <option key={range.id} value={range.id}>{range.label}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="time-to-learn" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Filter by time to learn</label>
            <select id="time-to-learn" value={selectedTimeToLearn} onChange={(e) => setSelectedTimeToLearn(e.target.value)} className="w-full py-3 pl-4 pr-10 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent">
              {timeToLearnOptions.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCareers.map(career => <CareerCard key={career.id} career={career} onClick={setSelectedCareer} />)}
        </div>

        {filteredCareers.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No careers match your filters</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </main>

      {selectedCareer && <CareerModal career={selectedCareer} onClose={() => setSelectedCareer(null)} />}

      {showResumeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Choose a Resume Template</h3>
            <ul>
              {resumeLinks.map((link, index) => <li key={index} className="mb-2"><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">{link.title}</a></li>)}
            </ul>
            <button onClick={() => setShowResumeModal(false)} className="px-4 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;