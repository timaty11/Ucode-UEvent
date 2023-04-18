import React from 'react';

import CouponsTableHead from './CouponsTableHead.jsx';
import PromocodesTableRows from './CouponsTableRows.jsx';
import editForms from '../../../../../utils/editForms.jsx';
import Popup from '../../../common/popup/Popup.jsx';


const CouponsTable = ({ data }) => {
  const [dataReviewPopupActive, setDataReviewPopupActive] = React.useState();
  const [dataCreatePopupActive, setDataCreatePopupActive] = React.useState();
  const [popupContent, setPopupContent] = React.useState();

  const tableHeadColumnNames = [{
    "ID":"",
    "Discount":"",
    "Duration":"",
    "Times used":"",
    "Valid":""
  }];

  return (
    <div>
      {/* Data review Popup */}
      <Popup active={dataReviewPopupActive} setActive={setDataReviewPopupActive} popupContent={popupContent}>
        { popupContent }
      </Popup>

      {/* Data create Popup */}
      <Popup active={dataCreatePopupActive} setActive={setDataCreatePopupActive}>
        { popupContent }
      </Popup>

      {/* Controls and table itself */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <CouponsTableHead data={tableHeadColumnNames} dataCategory={"events"} setPopupContent={setPopupContent} setPopupActive={setDataReviewPopupActive} />
          <PromocodesTableRows data={data} dataCategory={"events"} setPopupActive={setDataReviewPopupActive} setPopupContent={setPopupContent} />
        </table>
      </div>
    </div>
  );
}

export default CouponsTable;
