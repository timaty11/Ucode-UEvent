import React from 'react';

import ActionsButtons from '../common/ActionsButtons.jsx';
import editForms from '../../../../../utils/editForms.jsx';

const CouponsTableRows = ({ data, setPopupActive, setPopupContent }) => {
  console.log(data);
  const currentLang = localStorage.getItem("i18nextLng");

  const editButtonClick = (couponData) => {
    console.log("edit " + couponData.id);
    setPopupContent(editForms(couponData)["events"]);
    setPopupActive(true);
  }

  const deleteButtonClick = (couponData) => {
    console.log("delete " + couponData.id);
  }

  const tableRowsElements = data.map((couponData) => {
    return (
      <tr key={couponData.id}>
        <td key={-1} className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
        </td>

        <td className="px-6 py-4">{couponData.id}</td>
        <td className="px-6 py-4">{couponData.percent_off}</td>
        <td className="px-6 py-4">{couponData.duration_in_months} month</td>
        <td className="px-6 py-4">{couponData.times_redeemed}</td>
        <td className="px-6 py-4">
          {
            couponData.valid ?
            <svg className="w-4 h-4" fill="#00FF00" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg> :
            <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
          }
        </td>

        <ActionsButtons editButtonClick={() => editButtonClick(couponData)} deleteButtonClick={() => deleteButtonClick(couponData)} />
      </tr>
    )
  });
  
  return (
    <tbody>
      {tableRowsElements}
    </tbody>
  )
}

export default CouponsTableRows;
