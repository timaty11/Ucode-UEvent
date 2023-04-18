import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactMde from 'react-mde';
import Showdown from 'showdown';

import InputField from '../../common/form/InputField.jsx';
import TextField from '../form/TextField.jsx';
import FileUpload from '../../common/form/FileUpload.jsx';
import EditForm from '../../common/form/EditForm.jsx';

import Select from 'react-select';

import adminRoutes from '../../../routes/client/adminRoutes.js';
import apiAdminRoutes from '../../../routes/api/apiAdminRoutes.js';
import 'react-mde/lib/styles/css/react-mde-all.css';
import $api from '../../../../utils/api.js';
import { useCategories } from '../../../../hooks/useCategories.js'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});


const EventEditPage = ({ originData, formMessage }) => {
  const [value, setValue] = React.useState(originData.description);
  const [selectedTab, setSelectedTab] = React.useState('write');
  const [target, setTarget] = React.useState();
  const { isLoading, categories } = useCategories();
  const navigate = useNavigate();
  const keys = Object.keys(originData);
  console.log(categories);


  let temp = {};
  keys.forEach((key, i) => {
    temp[key] = "";
  });
  const [errors, setErrors] = React.useState(temp);
  delete originData.id;
  delete originData.categories;
  delete originData.priceTicket;
  delete originData.user_id;
  delete originData.created_at;
  const [data, setData] = React.useState(originData);

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const normalizeCategories = target.reduce((acc, category) => {
        return {
          ...acc,
          [category.label]: category.value,
        };
      }, {});

      data.description = value;
      console.log({ ...data, ...normalizeCategories });
      const response = await $api.post(apiAdminRoutes.eventPostPath(), { ...data, ...normalizeCategories });
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

  return isLoading ? <></> : (
    <form onSubmit={handleDataSubmit}>
      <div className="w-full bg-transparent">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-dark-bg-800 dark:border-dark-bg-700">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{formMessage}</h1>
            <InputField id="title" name="Title:" type="text" placeholder="new event" data={data} setData={setData} errors={errors} setErrors={setErrors}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z"></path>
                </svg>
              </div>
            </InputField>

            <Select
              className="w-full px-6"
              isMulti={true}
              isClearable={true}
              onChange={(categories) => {
                // console.log(categories.map((category, i) => { return category.value }));
                // setTarget(categories.map((category) => { return category.value}));
                setTarget(categories);
              }}
              options={categories.data.values.map((category) => ({
                label: category.title,
                value: category.id,
            }))}/>

            <InputField id="city" name="City:" type="text" placeholder="sasi" data={data} setData={setData} errors={errors} setErrors={setErrors}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"></path>
                </svg>
              </div>
            </InputField>

            <InputField id="address" name="Addres:" type="text" placeholder="hyi" data={data} setData={setData} errors={errors} setErrors={setErrors}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"></path>
                </svg>
              </div>
            </InputField>

            {/* <TextField id="description" name="Description" type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"></path>
                </svg>
              </div>
            </TextField> */}

            <div className="max-w-full px-6">
              <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={async (markdown) => {
                  const textConvert = converter.makeHtml(markdown);
                  console.log(textConvert);
                  return textConvert;
                }}
                childProps={{ writeButton: { tabIndex: -1 }}}
              />
            </div>

            <FileUpload name={"Upload poster image"} />

            <div className="grid pt-1 px-3 md:grid-cols-2">
              <InputField id="event_start" name="Event start:" type="date" placeholder="" data={data} setData={setData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                    <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                  </svg>
                </div>
              </InputField>

              <InputField id="event_end" name="End of event:" type="date" placeholder="" data={data} setData={setData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                    <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                  </svg>
                </div>
              </InputField>
            </div>

            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>

          </div>
        </div>
      </div>
    </form>
  );
};


export default EventEditPage;
