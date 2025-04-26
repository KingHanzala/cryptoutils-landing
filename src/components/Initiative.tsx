import React from 'react';
import { initiatives } from '../utils/content';

const Initiative: React.FC = () => {
  return (
    <section id="initiatives" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{initiative.name}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap">{initiative.tag}</span>
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">About</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{initiative.about}</p>
              <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Purpose</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow">{initiative.purpose}</p>
              <div className="mt-auto text-right">
                <button
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 ease-in-out shadow-md"
                  onClick={() => window.open(initiative.link, '_blank')}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiative;
