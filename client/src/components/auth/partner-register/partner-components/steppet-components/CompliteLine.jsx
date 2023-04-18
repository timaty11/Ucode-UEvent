import React from 'react';

const CompliteLine = ({
  setCurrentStep,
  step,
  children,
  isEnd = false,
}) => {
  return (
    <li
      className={`flex items-center relative 
      ${
        isEnd
          ? ''
          : "w-full text-blue-600 dark:text-blue-500 after:content-['']  after:animate-step-line-active after:h-1 after:border-b after:border-blue-200 after:border-4 after:inline-block dark:after:border-blue-800"
      }`}
    >
      <span className="absolute content-[''] w-full h-1 border-b border-gray-100 border-4 inline-block"></span>
      <span
        onClick={() => setCurrentStep(step)}
        className="cursor-pointer relative z-10 flex bg-gray-100 rounded-full items-center overflow-hidden justify-center w-10 h-10 lg:h-12 lg:w-12 dark:bg-blue-800 
                      shrink-0 after:z-[-1] after:content-[''] after:bg-blue-100 after:h-full after:top-0 after:left-0 after:animate-step-shape-active after:absolute 
                      after:dark:border-gray-700"
      >
        {children}
      </span>
    </li>
  );
};

export default CompliteLine;
