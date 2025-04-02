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

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

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
      <nav className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-800">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pathora</h1>
            <div className='flex items-center gap-4'>

            <a
            href="https://github.com/SUGAM-ARORA/Pathora" target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors border-2 border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Github
          </a>
              <button
                onClick={() => setShowResumeModal(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors border-2 border-gray-300 rounded-xl hover:bg-gray-100 hover:border-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
              >
                📄 Build your Resume
              </button>
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Discover Your Tech Career Path</h2>
        <input
          type="text"
          placeholder="Search career paths..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        />
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCareers.map(career => (
            <CareerCard key={career.id} career={career} onClick={setSelectedCareer} />
          ))}
        </div>
      </main>

      {selectedCareer && (
        <CareerModal career={selectedCareer} onClose={() => setSelectedCareer(null)} />
      )}

      {showResumeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Choose a Resume Template</h3>
            <ul>
              {resumeLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">{link.title}</a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowResumeModal(false)}
              className="px-4 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;