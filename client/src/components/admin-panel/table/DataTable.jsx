import React from 'react';

import TableHead from './common/TableHead.jsx';
import TableRows from './common/TableRow.jsx';
import Popup from '../../common/popup/Popup.jsx';


const DataTable = ({ data, dataCategory }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = React.useState();
  const [dataReviewPopupActive, setDataReviewPopupActive] = React.useState();
  const [dataCreatePopupActive, setDataCreatePopupActive] = React.useState();
  const [popupContent, setPopupContent] = React.useState();

  return (
    <div>
      {/* Data review Popup */}
      <Popup active={dataReviewPopupActive} setActive={setDataReviewPopupActive}>
        { popupContent }
      </Popup>

      {/* Data create Popup */}
      <Popup active={dataCreatePopupActive} setActive={setDataCreatePopupActive}>
        { popupContent }
      </Popup>

      {/* Controls and table itself */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={data} dataCategory={dataCategory} setPopupContent={setPopupContent} setPopupActive={setDataReviewPopupActive} />
          <tbody>
            <TableRows data={data} dataCategory={dataCategory} setPopupActive={setDataReviewPopupActive} setPopupContent={setPopupContent} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
