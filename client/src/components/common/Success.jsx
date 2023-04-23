import React from 'react';

import getQuary from '../../../utils/useQuary.js';
import $api from '../../../utils/api.js';


const Success = () => {
  const [isLoading, setLoading] = React.useState(false);
  const query = getQuary();
  const sessionId = query.get('session_id');
  const eventId = query.get('event_id');
  React.useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const response = await $api.post(
          'http://localhost:8080/api/pay/create-session-retrieve',
          { sessionId, eventId }
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);


  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <card className="flex flex-col rounded-lg shadow-lg w-1/2 p-10 bg-white">
          <div className="flex justify-center">
            <img src="https://ipio-books.com/wp-content/uploads/2018/03/success-icon.png" className="w-20 h-20" />
          </div>

          <p className="text-center text-gray-800 text-4xl mt-8"> Success! </p>
          <p className="text-center text-gray-700 font-light mt-5">{' '}Your order has been successfully completed go nagyi!{' '}</p>

          <div className="flex items-center justify-center flex-row-reverse mt-14 items-end gap-5">
            <button type="button" className={`flex text-blue-700 font-normal py-2 px-4 border border-blue-700 rounded transition duration-300 ease-in-out ${ isLoading ? '' : 'focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:text-white'}`} disabled={isLoading} onClick={() => { location.href = '/' }}>
              {isLoading ? (
                <>
                  <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium subpixel-antialiased">Processing...</span>
                </>
              ) : (
                <span className="font-medium subpixel-antialiased">Go back</span>
              )}
            </button>
          </div>
        </card>
      </div>
    </div>
  );
};

export default Success;
