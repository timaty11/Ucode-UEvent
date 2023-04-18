import React from 'react';


const PageNumber = ({ pageNumber, currentPageNumber, setCurrentPageNumber }) => {
  const pageNumberClickHandle = () => {
    setCurrentPageNumber(pageNumber);
  }

  return currentPageNumber === pageNumber ? (
    <li className="px-1">
      <button aria-current="page" className="z-10 w-7 h-7 leading-tight text-white border border-blue-300 bg-blue-700 rounded-full hover:shadow-lg hover:shadow-blue-250 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        { pageNumber }
      </button>
    </li>
  ) : (
    <li className="px-1">
      <button onClick={pageNumberClickHandle} className="w-7 h-7 leading-tight text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 hover:shadow-lg hover:shadow-blue-150 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        { pageNumber }
      </button>
    </li>
  );
}

export default PageNumber;
