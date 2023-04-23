import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';

import $api from '../../../../../../utils/api';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes';


const FormPay = ({ completeStep, setCompleteStep }) => {
  const [key, setKey] = React.useState('');
  const [t, i18n] = useTranslation('term-use');

  const handeleForm = async (e) => {
    try {
      e.preventDefault();
      const response = await $api.post(apiClientRoutes.createOrganization(2), {
        secretKey: key,
      });
      console.log(response);
      setCompleteStep((prev) => ({
        ...prev,
        step2: {
          isComplete: true,
        },
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animate-active-page ">
      <div className="bg-white relative flex flex-col justify-center overflow-hidden  py-12  dark:bg-gray-900 ">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl dark:bg-gray-800" >
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16 ">
            <div className="flex flex-col items-center justify-center text-center space-y-2 ">
              <div className="font-semibold text-3xl">
                <p>{t('step2.title')}</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p className="mt-4 text-center text-gray-500 dark:text-gray-400">{t('step2.text')}</p>
              </div>
            </div>

            <div>
              <form onSubmit={handeleForm}>
                <div className="flex flex-col space-y-6 ">
                  <div className="  items-center justify-between ">
                    <input type="text" placeholder={t('step2.placeholder')} onChange={(e) => setKey(e.target.value)} disabled={completeStep.step2.isComplete} className="py-3 px-[14px] flex items-center justify-center w-full rounded-xl text-body-color border border-gray-400 outline-none ext-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-70 focus:border-primary" />
                  </div>

                  <div className="flex flex-col space-y-5">
                    <button disabled={completeStep.step2.isComplete} className="flex flex-row items-center disabled:opacity-80 justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      {t('step2.button')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPay;
