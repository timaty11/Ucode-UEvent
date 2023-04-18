import React from 'react';

const CheckboxInputField = ({ id, name, type, data, setData }) => {
  const inputChangeHandle = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  return (
    <div>
      <div className="relative z-0 w-full mb-6 group">
        {/* <input onChange={inputChangeHandle} type={type} name="floating_email" id={id} className="block py-2.5 px-7 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data[id]}/>
        <label htmlFor="floating_email" className="px-10 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6 peer-focus:-translate-x-8">{name}</label> */}
        <input id={id} type={type} value={data.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        {/* <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label> */}
      </div>
      {errorMessageElement}
    </div>
  );
};

export default CheckboxInputField;
