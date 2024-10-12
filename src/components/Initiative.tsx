import React from 'react';
import { initiatives } from '../utils/content';

const Initiative: React.FC = () => {
  return (
    <div id="initiatives" className="container flex flex-col items-center justify-center mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Initiatives</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-accent card w-96">
            <div className="card-body">
              <div>
              <h2 className="card-title">{initiative.name}</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-neutral">{initiative.tag}</div>
              </div>
              </div>
                <h3 className="card-title">About</h3>
                <p>{initiative.about}</p>
                <h3 className="card-title">Purpose</h3>
                <p>{initiative.purpose}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-secondary" onClick={() => window.open(initiative.link, '_blank')}>Visit</button>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Initiative;
