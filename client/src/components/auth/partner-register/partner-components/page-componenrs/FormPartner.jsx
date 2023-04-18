import React from 'react';
import $api from '../../../../../../utils/api.js'
import { useNavigate } from 'react-router-dom';

import InputField from '../../../../common/form/InputField.jsx';
import TextField from '../../../../common/form/TextField.jsx';

import clientRoutes from '.././../../../../routes/client/clientRoutes.js';
import apiRoutes from '.././../../../../routes/api/apiClientRoutes.js';
import Spinner from '../../../../common/Spinner.jsx'
import { useTranslation } from 'react-i18next';

const FormPartner = ({ setCompleteStep, completeStep }) => {
  const [isLoadingButton, setLoadingButton] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false)
  const [t, i18n] = useTranslation('term-use');

  const [partnerData, setPartnerData] = React.useState({
    name_organization: '',
    email: '',
    phone_organization: '',
    address: '',
    description: '',
    link_organization: '',
  });

  const [errors, setErrors] = React.useState({
    name_organization: '',
    email: '',
    phone_organization: '',
    address: '',
    description: '',
    link_organization: '',
  });

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await $api.get('http://localhost:8080/api/organization/info');
        setPartnerData(response.data.values)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (completeStep.step3.isComplete) {
      fetch();
    }
  }, []);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoadingButton(true);
    try {
      const response = await $api.post(apiRoutes.createOrganization(3), partnerData);
      console.log(response);
      setCompleteStep((prev) => ({
        ...prev,
        step3: {
          isComplete: true,
        }
      }))
    } catch (e) {
      setErrors({
        ...errors,
        ...e.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {}),
      });
    } finally {
      setLoadingButton(false)
    }
  };

  return isLoading ? <Spinner /> : (
    <form onSubmit={handleRegisterSubmit} className="animate-active-page">
      <div className="w-full bg-transparent px-[25%] pt-10 space-y-4">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-dark-bg-800 dark:border-dark-bg-700 ">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{t('step3.title')}</h1>
            <div className="space-y-4 md:space-y-4">
              <InputField id="name_organization" name={t('step3.filds.name')} type="text" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
                  </svg>
                </div>
              </InputField>

              <div className="px-5 grid md:grid-cols-2">
                <InputField id="email" name={t('step3.filds.email')} type="email" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                </InputField>

                <InputField id="phone_organization" name={t('step3.filds.phone')} type="text" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                      <path clipRule="evenodd" fillRule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"></path>
                    </svg>
                  </div>
                </InputField>
              </div>

              <InputField id="address" name={t('step3.filds.address')} type="text" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"></path>
                  </svg>
                </div>
              </InputField>

              <InputField id="link_organization" name={t('step3.filds.website')} type="text" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z"></path>
                  </svg>
                </div>
              </InputField>

              <TextField id="description" name={t('step3.filds.description')} type="text" data={partnerData} setData={setPartnerData} errors={errors} setErrors={setErrors}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"></path>
                  </svg>
                </div>
              </TextField>

              <div className="w-full flex justify-center">
                <button disabled={completeStep.step3.isComplete} type="submit" className="w-[50%] flex justify-center items-center px-5 mt-5 py-2.5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-80">
                {!isLoadingButton ? (
                t('step3.button')
                ) : (
                  <>
                    <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-medium subpixel-antialiased">
                      {t('step3.button-load')}
                    </span>
                  </>
                )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPartner;