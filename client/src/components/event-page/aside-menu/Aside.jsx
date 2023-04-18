import React from 'react';
import CheckoutButton from '../../payment/CheckoutButton.jsx';
import { useTranslation } from 'react-i18next';
import moment from 'moment/min/moment-with-locales';

const Aside = ({ edit, setEdit, eventData, ticketLeft }) => {
  const { city, address, priceTicket, event_start, event_end, first_name, last_name, second_name } = eventData;
  const currentLang = localStorage.getItem('i18nextLng')
  const date = moment(event_start).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM YYYY, ddd HH:mm').split(' ').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ')
  const [t, i18n] = useTranslation('eventPage');

  return (
    <div className="sticky top-20 mt-6 rounded-lg border bg-white p-0 shadow-md dark:bg-dark-bg-800 dark:border-black ">
      <div>
        <div className="  bg-blue-500  dark:bg-dark-bg-900">
          <div className=" start flex">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              strokeWidth={1.5}
              className=" ml-4 my-4 h-6 w-6 dark:text-dark-text-300 "
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              ></path>
            </svg>
            <p className="text-date-ticket my-4 pl-2  dark:text-dark-text-400">{date}</p>
          </div>
        </div>
      </div>
      <div className=" ml-4 mt-2 ">
        <div className="justify-between ">
          <div className="flex items-center pb-2 text-indigo-600 flex items-center dark:text-indigo-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 27 28"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              ></path>
            </svg>
            <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">
                Kyiv, {address}
            </p>
          </div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
            {/* <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" -mt-2 h-8 w-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
            <p className="  pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">
              ФОП {`${first_name} ${second_name} ${last_name}`}
            </p>
          </div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              ></path>
            </svg>
            <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">
              від {priceTicket} грн.
            </p>
          </div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="pb-1 text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              ></path>
            </svg>
            <p className="pl-2 text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:text-dark-text-300">
              Tickets left: {ticketLeft.ticketsLeft}
            </p>
          </div>
        </div>
      </div>
      <CheckoutButton eventItem={eventData} name={t('button-ckeckout.name')} />
    </div>
  );
};

export default Aside;
