import React from 'react';
import { useTranslation } from 'react-i18next';


const Active = () => {
  return (
    <div>

    	<ul className="left-0 right-0 -bottom-18 mt-3 p-3">
      	<li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
        	Active
        </li>

        <div className="py-5">
          <details className="group">
            <summary className=" items-center font-medium cursor-pointer list-none">
            <span>
              <div className=" shadow-lg  hover:shadow-xl transform hover: transition duration-500 bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
                <div className="flex p-3  border-l-8 border-green-600">
                  <div className="space-y-1 border-r-2 pr-3">
                    <div className="text-sm leading-5 font-semibold">
                      <span className="text-xs leading-4 font-normal text-gray-500">
                        {' '}
                        Release #
                      </span>{' '}
                      LTC08762304
                    </div>
                    <div className="text-sm leading-5 font-semibold">
                      <span className="text-xs leading-4 font-normal text-gray-500 pr">
                        {' '}
                        BOL #
                      </span>{' '}
                      10937
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="ml-3  space-y-1 border-r-2 pr-3">
                    <div className="mt-6  text-sm leading-5 font-semibold">
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
                    <div className=" rounded-sm  ml-2 ">
                      <div className="ml-3 my-5 bg-green-600 p-1 w-20">
                        <div className="uppercase text-xs leading-4 font-semibold text-center text-green-100">
                        <div className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>

            </summary>

              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Release #LTC08762304
              </p>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Release #LTC08762304
              </p>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Release #LTC08762304
              </p>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Release #LTC08762304
              </p>

          </details>
        </div>
			</ul>
    </div>
  );
};

export default Active;
