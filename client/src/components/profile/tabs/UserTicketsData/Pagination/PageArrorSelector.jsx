import React from 'react';


const PageArrorSelector = ({ currentPageNumber, setCurrentPageNumber, type, children }) => {
  const leftArrowHandle = () => {
    if (currentPageNumber === 1) {
    } else {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  }

  const rightArrowHandle = () => {
    if (currentPageNumber === 6) {
    } else {
      setCurrentPageNumber(currentPageNumber + 1);
    }
  }

  return (
    <li className="px-3">
      <button onClick={type === "left" ? leftArrowHandle : rightArrowHandle} className="block px-2 py-2 ml-0 shadow-lg shadow-blue-150 leading-tight text-gray-500  bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        { children }
      </button>
    </li>
  )
}

export default PageArrorSelector;
