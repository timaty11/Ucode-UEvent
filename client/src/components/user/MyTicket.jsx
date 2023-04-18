import React from "react";
import '../css/event-card.css';
import '../css/main-page.css';
import TicketItem from './TicketItem.jsx';

const MyTicket = () => {


  
  return (
    <div >
      {/* Пошел процесс... */}
          <div className="main-content">
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                
                <h2 className="title text-center">MyTicket</h2>
            
                <div className='Kokon-na-mazy'>
                  <TicketItem />


                  
                  {/* {eventsElements} */}
                </div>
              </div>
            </div>
          </div>
  
    </div>
  );
}

export default MyTicket;
