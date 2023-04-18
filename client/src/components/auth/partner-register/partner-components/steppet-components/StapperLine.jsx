import React from 'react';

const StapperLine = ({setCurrentStep, iter, currentStep, step, children, isEnd = false }) => {
  return (
    <li 
      className={`flex items-center
    ${
      isEnd
        ? ''
        : "w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
    }`}
    >
      <span 
      onClick={() => {
        if (step >= iter) {
          setCurrentStep(step);
        }
      }}
      className={`flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0
      ${step < iter ? '' : 'cursor-pointer'}
      `}>
        {children}
      </span>
    </li>
  );
};

export default StapperLine;
