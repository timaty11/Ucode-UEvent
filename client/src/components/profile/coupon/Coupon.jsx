import React from 'react';
import { useTranslation } from 'react-i18next';

import Active from './Active.jsx';
import Popup from '../../common/popup/Popup.jsx';
import editForms from '../../../../utils/editForms.jsx';


const Coupon = () => {
  const [couponCreatePopupActive, setCouponCreatePopupActive] = React.useState();

  const temp = {
    discount: "",
    amount: "",
    created_at: ""
  };

  return (
    <div>
      <Popup active={couponCreatePopupActive} setActive={setCouponCreatePopupActive}>
        { editForms(temp).coupons }
      </Popup>

      <div className="container mx-auto bg-gray-50 min-h-screen p-8 antialiased">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Our Pricing Plan
              </h2>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative flex items-center p-6 space-x-6 rounded-xl">
          <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input type="text" placeholder="Search for elixir..." className="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" />

          <button onClick={() => {setCouponCreatePopupActive(true)}} className="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100">
            <svg fill="gray" viewBox="0 0 442 512" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /> */}
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            </svg>
          </button>
        </div>

        {/* Active Promo */}
          <Active />
        {/* no active */}

        <ul className="left-0 right-0 -bottom-18 mt-3 p-3">
          <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
            Inactive
          </li>
          
          <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
            <div className="flex p-3  border-l-8 border-red-600">
              <div className="space-y-1 border-r-2 pr-3">
                <div className="text-sm leading-5 font-semibold">
                  <span className="text-xs leading-4 font-normal text-gray-500">
                    {' '}
                    Release #
                  </span>
                  {' '}
                  LTC08762304
                </div>

                <div className="text-sm leading-5 font-semibold">
                  <span className="text-xs leading-4 font-normal text-gray-500 pr">
                    {' '}
                    BOL #
                  </span>
                  {' '}
                  10937
                </div>
              </div>

              <div className="flex-1">
                <div className="ml-3 space-y-1 border-r-2 pr-3">
                <div className="mt-6 text-sm leading-5 font-semibold">
                  JUN 14. 9:30 PM
                </div>
                </div>
              </div>

              <div className="border-r-2 pr-3">
                <div>
                  <div className="ml-4 my-4 border-gray-200 border-2 bg-gray-300 p-1">
                    <div className="text-center text-2xl leading-5 font-semibold text-gray-800">
                      20%
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className=" rounded-sm ">
                  <div className="ml-3 my-5 bg-red-600 p-1 w-20">
                    <div className="uppercase text-xs leading-4 font-semibold text-center text-red-100">
                      Canceled
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </ul>
        <div className="flex flex-col items-center my-12">
          <div className="flex text-gray-700">
            <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
              <svg width="100%" height="100%" className="feather feather-chevron-left w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>

            <div className="flex h-12 font-medium rounded-full bg-gray-200">
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                1
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">
                2
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                3
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                ...
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                13
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                14
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                15
              </div>
              <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
                2
              </div>
            </div>

            <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
              <svg className="feather feather-chevron-right w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
