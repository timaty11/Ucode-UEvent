import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import SavedEventsTab from '../tabs/UserTicketsData/SavedEventsTab.jsx';
import UserTicketsTab from '../tabs/UserTicketsData/UserTicketsTab.jsx';


const UserEventsTabsSelector = ({ userData, setPopupContent, setPopupActive }) => {
  return (
    <div className="my-4 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex-1 py-3 px-6 bg-white rounded-lg shadow-xl dark:bg-dark-bg-800" data-carousel="static" id="indicators-carousel">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center">
              <TabButton id="savedEvents" slideNumber="1" active={true} category="userEventsData" name="Saved events" />
              <TabButton id="tickets" slideNumber="2" active={false} category="userEventsData" name="Your tickets" />
            </ul>
          </div>
          
          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <TabContent id="savedEvents"><SavedEventsTab userData={userData} setPopupContent={setPopupContent} setPopupActive={setPopupActive}/></TabContent>
            <TabContent id="tickets"><UserTicketsTab userData={userData} setPopupContent={setPopupContent} setPopupActive={setPopupActive}/></TabContent>
            <TabContent id="phantom2"></TabContent>
            <TabContent id="phantom3"></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEventsTabsSelector;
