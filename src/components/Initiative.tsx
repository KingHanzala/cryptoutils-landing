import React from 'react';
import { initiatives } from '../utils/content';

const Initiative: React.FC = () => {
  return (
    <div id="initiatives" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Initiatives</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {initiatives.map((initiative, index) => (
          <div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
            <div className="absolute top-2 right-2">
              <span className="inline-block bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-md px-2 py-1 text-xs font-medium">
                {initiative.tag}
              </span>
            </div>
            <div className="p-5 flex flex-col h-full">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{initiative.name}</h5>
              <div className="mb-3">
                <h3 className="text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">About</h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">{initiative.about}</p>
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Purpose</h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">{initiative.purpose}</p>
              </div>
              <div className="mt-auto flex justify-center">
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit {initiative.name}
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiative;
