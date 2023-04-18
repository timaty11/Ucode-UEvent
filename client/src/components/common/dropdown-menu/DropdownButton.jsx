import React from "react";
import { useTranslation } from 'react-i18next';


const DropdownButton = ({ id, name, children }) => {
  const [t, i18n] = useTranslation('mainPage');

  return (
    <div>
      <button id="dropdownToggleButton" data-dropdown-toggle={id} className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className="dark:text-gray-300" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <p className="hidden md:block text-sm leading-none dark:text-gray-300">{t('sidebar.filter')}</p>
    
      </button>
      <div id={id} className="hidden z-15 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
          { children }
        </ul>
      </div>
    </div>
  )
}

export default DropdownButton;
