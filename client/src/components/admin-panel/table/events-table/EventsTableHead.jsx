import React from 'react';

import DropdownButton from '../../../common/dropdown-menu/DropdownButton.jsx';
import RadioDropdownElement from '../../../common/dropdown-menu/RadioDropdownElement.jsx';
import editForms from '../../../../../utils/editForms.jsx';


const EventsTableHead = ({ data, dataCategory, setPopupContent, setPopupActive }) => {
  const timePeriods = {
    day: {
      name: "Last day",
      value: 1
    },
    week: {
      name: "Last 7 days",
      value: 7
    },
    month: {
      name: "Last month",
      value: 30
    },
    year: {
      name: "Last year",
      value: 365
    }
  }

  const [selectedTimePeriod, setSelectedTimePeriod] = React.useState(timePeriods.week);
  const keys = Object.keys(data[0]);

  const createRecordButtonHandle = (e) => {
    e.preventDefault();
    let temp = {};
    keys.forEach((key, i) => {
      temp[key] = "";
    });
    setPopupContent(editForms(temp)[dataCategory]);
    setPopupActive(true);
  }

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" colSpan="100%" className="p-2 ">
        <div className="flex items-center justify-between pb-4">
          {/* <!-- Dropdown menu PIDORASINA EBANAYA HYLI TI BLYAT NE RABOTAESH --> */}
          <div>
            <DropdownButton name={selectedTimePeriod.name} id="eblan">
              <RadioDropdownElement key="eblannn1" id="eblannn1" name={timePeriods.day.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn2" id="eblannn2" name={timePeriods.week.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn3" id="eblannn3" name={timePeriods.month.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn4" id="eblannn4" name={timePeriods.year.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
            </DropdownButton>
          </div>
          <button onClick={createRecordButtonHandle} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Create a record
            </span>
          </button>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor items"></input>
          </div>
        </div>
        </th>
      </tr>
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
          </div>
        </th>
        
        <th scope="col" className="p-4">Poster</th>
        <th scope="col" className="p-4">Title</th>
        <th scope="col" className="p-4">City</th>
        <th scope="col" className="p-4">Address</th>
        <th scope="col" className="p-4">Date</th>
        <th scope="col" className="p-4">Created at</th>
        <th scope="col" className="p-4">Price</th>
        <th scope="col" className="p-4">Tags</th>
        <th scope="col" className="p-4">Actions</th>
      </tr>
    </thead>
  )
}

export default EventsTableHead;
