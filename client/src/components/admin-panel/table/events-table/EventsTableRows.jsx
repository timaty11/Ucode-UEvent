import React from 'react';

import ActionsButtons from '../common/ActionsButtons.jsx';
import editForms from '../../../../../utils/editForms.jsx';


const EventsTableRows = ({ data, setPopupActive, setPopupContent }) => {
  console.log(data);
  const currentLang = localStorage.getItem("i18nextLng");
  
  const editButtonClick = (eventData) => {
    console.log("edit " + eventData.id);
    setPopupContent(editForms(eventData)["events"]);
    setPopupActive(true);
  }

  const deleteButtonClick = (eventData) => {
    console.log("delete " + eventData.id);
  }

  const tableRowsElements = data.map((eventData) => {
    return (
      <tr key={eventData.id}>
        <td key={-1} className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
        </td>

        <td className="px-6 py-4">{eventData.poster}</td>
        <td className="px-6 py-4">{eventData.title}</td>
        <td className="px-6 py-4">{eventData.city[currentLang]}</td>
        <td className="px-6 py-4">{eventData.address}</td>
        <td className="px-6 py-4">{eventData.event_start} - {eventData.event_end}</td>
        <td className="px-6 py-4">{eventData.created_at}</td>
        <td className="px-6 py-4">{eventData.priceTicket}</td>

        <td className="px-6 py-4">
          {
            !eventData.categories ? <></> : eventData.categories.map((category) => {
              return (
                <span key={category.id} className="px-2 py-1 mx-1 rounded-xl bg-gray-200">
                  {category.title}
                </span>
              );
            })
          }
          <button className="px-1 py-1 rounded-xl bg-gray-200">
            <span>+</span>
          </button>
        </td>

        <ActionsButtons editButtonClick={() => {
          editButtonClick(eventData)
        }
          } deleteButtonClick={() => deleteButtonClick(eventData)} />
      </tr>
    )
  });
  
  return (
    <tbody>
      {tableRowsElements}
    </tbody>
  )
}

export default EventsTableRows;
