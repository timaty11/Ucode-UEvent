import React from 'react';
import { useTranslation } from 'react-i18next';

import moment from 'moment/min/moment-with-locales';

const EventElement = ({ event }) => {
  const [t, i18n] = useTranslation('mainPage');
  const currentLang = localStorage.getItem('i18nextLng')

  const date = moment(event.event_start).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM,HH:mm ddd').split(' ').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ')
  const date2 = moment(event.event_start).locale(currentLang === 'ua' ? 'uk' : currentLang).format('D MMMM').split(' ').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ')
  const city = event.city[currentLang];


  return (
    <div className="px-3 py-5 gap-8 snap-x w-[350px] overflow-hidden  ">
        <div className="first-elem-div col-sm-4 flex-col rounded-[20px]  overflow-hidden bg-white-700 relative  group relative w-full ">
        <div className="h-full w-full">
          <div className="w-full">
            <img className="rounded-[20px] w-full h-[350px]" src={event.poster?`http://localhost:8080/api/event-pic/${event.poster}`:`data:image/jpeg;base64,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`} alt="" />
          </div>

          <div className="mb-3 flex items-center justify-between px-0 md:items-start">
            <div className="mb-3">
              <div className="bl1 flex pt-5">
                <p className="text-lg pl-3 font-semibold text-gray-700 md:text-1xl dark:text-dark-text-400"> {date}</p>
              </div>

              {/* name event */}
              <p className="name text-gray-700 mb-20 font-bold text-2xl   hover:text-gray-900 hover: dark:text-dark-text-100">{ event.title }</p>

              {/* <p className="text-lg font-bold text-navy-700"> Abstract Colors </p> */}
              <div className="nav nav-pills nav-justified px-2">
                <div className="location start flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-dark-text-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-l font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-dark-text-300">{ city }</p>
                </div>

                <div className="start flex px-1">
                  <p className="text-lg font-semibold text-xs sm:text-slate-900 md:text-2xl dark:text-dark-text-400">{t('eventCard.from')} { event.priceTicket } ₴</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-elem-div rounded-[20px] absolute rounded w-full h-full 
          right-0 top-0 flex flex-col justify-between bg-gray-700 transition duration-700 translate-y-[120%]">

          <div className="mt-2 scale-10 text-white  outline-none ">
          </div>

          <div className=" scale-10 text-white outline-none  ">
            <p className="АА  ">{date2}</p>
          </div>

          <div className="scale-10 text-white outline-none">
            <p className="name text-wight-700 font-bold text-4xl mb-3 text-wight-900  dark:text-dark-text-200">{ event.title } </p>
          </div>

          <div className="mb-10 scale-10 text-white outline-none ">
            <p className="text-wight-700 text-lg text-white">{ city }</p>
            <div className="justify-between md:items-center lg:justify-between">
              <button onClick={() => { location.href = `/event/${event.id}` }} className="fa fa-shopping-cart p-2 pl-11 pr-11 
             bg-indigo-500 border-2 border-indigo-500 text-gray-100  text-lg rounded-lg 
              transition-colors duration-700 transform  ">
                { t('eventCard.buy') }
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventElement;