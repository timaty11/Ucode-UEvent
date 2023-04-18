import React from 'react';

import Spinner from '../../../common/Spinner.jsx';
import PaginationElement from './Pagination/PaginationElement.jsx';

import '../../../css/events-tab.css';

//// TEMP ////
import user_saved_events from '../../../../temp/user_saved_events.json';
import memFile from '../../../../temp/the-rock-eyebrow-raise-sound-effect-By-Tuna.mp3';
//// TEMP ////


const SavedEventsTab = ({ userData, setPopupContent, setPopupActive }) => {
  if (!userData) {
    return <Spinner />;
  }

  // const { isLoading, user_saved_events } = useUserTickets(userData.values.id);
  const mem = new Audio(memFile);

  const [currentPageNumber, setCurrentPageNumber] = React.useState(1);
  const [currentPageEvents, setCurrentPageElements] = React.useState(user_saved_events.slice(0, 3));

  React.useEffect(() => {
    setCurrentPageElements(user_saved_events.slice((currentPageNumber * 3) - 3, (currentPageNumber * 3)));
  }, [currentPageNumber]);

  // return isLoading ? (
  //   <Spinner />
  // ) : (
  return (
    <div>
      {
        !user_saved_events || !user_saved_events.length ? (
          <p>You have not purchased tickets yet</p>
        ) : (
          <div className="relative">
            <table className="h-[85%] w-full text-center text-gray-500 dark:text-gray-400">
              <tbody>
                {
                  currentPageEvents.map((eventData) => {
                    const redeemButtonClick = () => {
                      console.log("remove saved event pidorasa");
                      
                      mem.play();
                      const button = document.getElementById(eventData.id + "-id").classList;
                      if (button.contains("redeem-button")) {
                        button.remove("redeem-button");
                        button.add("redeem-button-rotated");
                      } else {
                        button.remove("redeem-button-rotated");
                        button.add("redeem-button");
                      }

                      const redeemSubmitButtonHandle = async () => {
                        try {
                          console.log("NADO SDELAT REMOVE PIDORASA!!!!1");
                          // const response = await $api.post('http://localhost:8080/api/pay/create-refunds-payment', { id: ticketData.id });
                          // console.log(response.data);
                        } catch (e) {
                          console.log(e);
                        }
                        setPopupActive(false);
                      }
  
                      setPopupContent(
                        <div className="text-center">
                          <h2 className="pb-6">Are you sure you want to unsubscribe from event?</h2>
                          <div className="flex px-3">
                            <button onClick={redeemSubmitButtonHandle} type="submit" className="mr-1 w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700">Unsubsribe</button>
                            <button onClick={() => { setPopupActive(false) }} type="submit" className="ml-1 w-full text-white bg-secondary-600 hover:bg-secondary-700 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700">Cancel</button>
                          </div>
                        </div>
                      )
                      setPopupActive(true);
                    }

                    const eventClickHandle = () => {
                      console.log("PIDORASA NADO REDIRECT TO EVENT PAGE");
                    }

                    const addressClickHandle = () => {
                      console.log("PIDORASA NADO REDIRECT TO ADDRESS SEARCH");
                    }

                    const dateClickHandle = () => {
                      console.log("PIDORASA NADO REDIRECT TO DATE SEARCH");
                    }

                    return (
                      <tr key={eventData.id + "-row"} className="h-20 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-bg-900">
                        <td onClick={eventClickHandle} className="pl-3 py-3 w-[15%] hover:cursor-pointer"><img className="h-20" src="/1.jpg"></img></td>
                        <td className="text-left w-[60%]">
                          <h3 onClick={eventClickHandle} className="text-2xl text-gray-700 hover:cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-2 hover:decoration-1 dark:text-dark-text-200 dark:hover:text-dark-text-400">
                            { eventData.title }
                          </h3>

                          <h5 onClick={addressClickHandle} className="text-xs text-gray-500 hover:cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-1">
                            { eventData.city + ", " + eventData.address }
                          </h5>

                          <p className="text-sm text-gray-700 dark:text-dark-text-400">
                            {
                              eventData.description.length > 80 ?
                              eventData.description.substring(0, 77) + '...' :
                              eventData.description
                            }
                          </p>
                        </td>

                        <td onClick={dateClickHandle} className="text-sm text-gray-500 hover:cursor-pointer">{ eventData.event_start + " - " + eventData.event_end }</td>
                        
                        <td>
                          <button onClick={redeemButtonClick} className="w-7 h-7">
                            <svg aria-hidden="true" id={eventData.id + "-id"} className="redeem-button w-5 h-5 text-gray-500 hover:rounded-full dark:text-gray-400 dark:hover:bg-dark-bg-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path clipRule="evenodd" fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
            <PaginationElement currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />
          </div>
        )
      }
    </div>
  )
};

export default SavedEventsTab;
