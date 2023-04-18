import React from 'react';

const FilterButton = ({ setActive, active }) => {

  return (
    <div className="flex flex-col z-10">
        <button onClick={() => setActive(!active)}className="flex items-center w-full py-2 px-3 rounded-lg text-sm font-medium text-gray-700 bg-blue-600 dark:bg-dark-bg-800">
          <svg className="text-gray-200 dark:text-gray-300" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14.6452V9.33875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6.30645V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14.6452V7.82263" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4.79032V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 14.6452V10.8549" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 7.82258V1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 9.33875H7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 4.79028H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 10.8549H23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="pl-2 text-gray-200">Filters</span>
        </button>
    </div>
  );
}

export default FilterButton;
