import React from 'react';
import { useTranslation } from 'react-i18next';

import EditForm from '../../common/form/EditForm.jsx';
import InputField from '../../common/form/InputField.jsx';
import ToggleSwitchInputField from '../../common/form/ToggleSwitchInputField.jsx';


const CouponEditForm = ({ originData, formMessage }) => {
  const [ t, i18n ] = useTranslation('editForm');

  const keys = Object.keys(originData);

  let temp = {};
  keys.forEach((key, i) => {
    temp[key] = "";
  });
  const [errors, setErrors] = React.useState(temp);
  const [data, setData] = React.useState(originData);

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiAdminRoutes.eventPostPath(), data);
      console.log(response);
      navigate(adminRoutes.mainPagePath());
    } catch (e) {
      console.log(e);
      setErrors({
        ...errors,
        ...e.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {}),
      });
    }
  };


  return (
    <form onSubmit={handleDataSubmit}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <EditForm formMessage={formMessage}>
          <InputField id="discount" name="Discount" type="number" min={0} data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
              </svg>
            </div>
          </InputField>

          <InputField id="amount" name="Amount" type="number" min={0} data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
              </svg>
            </div>
          </InputField>

          <InputField id="created_at" name="Created at" type="date" placeholder="" data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
              </svg>
            </div>
          </InputField>

          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>

        </EditForm>
      </section>
    </form>
  );
}

export default CouponEditForm;
