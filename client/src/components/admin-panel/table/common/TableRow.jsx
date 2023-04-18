import React from "react";

import editForms from "../../../../../utils/editForms.jsx";


const TableRows = ({ data, dataCategory, setPopupActive, setPopupContent }) => {  
  const rowsElements = data.map((dataElement, i) => {

    const keys = Object.keys(dataElement);
    const dataElementValues = [];

    // Make row extend to show full info
    const rowClickHandle = () => {
      console.log(dataElement);
    }
    
    const editButtonClick = () => {
      console.log("edit");
      setPopupContent(editForms(dataElement)[dataCategory]);
      setPopupActive(true);
    }

    const deleteButtonClick = () => {
      console.log("delete");
    }

    dataElementValues.push(
      <td key={-1} className="w-4 p-4">
        <div className="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
        </div>
      </td>
    );

    dataElementValues.push(keys.map((key, i) => {
      if (key === 'active') {
        if (dataElement[key]) {
          return (
            <td key={i} onClick={rowClickHandle} className="px-6 py-4">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"></path>
              </svg>
            </td>
          );
        } else {
          return (
            <td key={i} onClick={rowClickHandle} className="px-6 py-4">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"></path>
              </svg>
            </td>
          );
        }
      } else if (dataElement[key]) {
        if (String(dataElement[key]).length < 15) {
          return <td key={i} onClick={rowClickHandle} className="px-6 py-4">{dataElement[key]}</td>
        } else {
          return <td key={i} onClick={rowClickHandle} className="px-6 py-4">{dataElement[key].slice(0, 8) + "..."}</td>
        }
      } else {
        return <td key={i} onClick={rowClickHandle} className="px-6 py-4">null</td>
      }
    }));

    dataElementValues.push(
      <td key={dataElementValues.length} className="px-6 py-4 flex">
        <button onClick={editButtonClick}>
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"></path>
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"></path>
          </svg>
        </button>
        <button onClick={deleteButtonClick}>
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"></path>
          </svg>
        </button>
      </td>
    );

    return (
      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">{dataElementValues}</tr>
    );
  })

  return rowsElements;
}

export default TableRows;
