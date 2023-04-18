import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputField from '../../common/form/InputField.jsx';
import ToggleSwitchInputField from '../../common/form/ToggleSwitchInputField.jsx';
import EditForm from '../../common/form/EditForm.jsx';

import adminRoutes from '../../../routes/client/adminRoutes.js';
import apiAdminRoutes from '../../../routes/api/apiAdminRoutes.js';


const RoleEditForm = ({ originData, formMessage }) => {
  const navigate = useNavigate();
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

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form onSubmit={handleDataSubmit}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <EditForm formMessage={formMessage}>
          <InputField id="id" name="ID" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="user_id" name="User ID" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd"  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="role" name="Role" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </InputField>

          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>

        </EditForm>
      </section>
    </form>
  );
};

export default RoleEditForm;
