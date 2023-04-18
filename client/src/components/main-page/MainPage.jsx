import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../common/Spinner.jsx';

import { useEvents } from '../../../hooks/events/useEvents.js';
import '../css/event-card.css';
import '../css/main-page.css';
import Content from './elements-main-page/Content.jsx';


const MainPage = () => {
  const [t, i18n] = useTranslation('mainPage');
  const { isLoading, events } = useEvents();
  console.log(events);

  return isLoading ? <Spinner /> : (
    <div className="main-content dark:bg-dark-bg-900 ">
      <div className="col-sm-9 padding-right">
        <div className="features_items">
          <h2 className="box-border my-8 text-2xl font-black leading-tight 
          tracking-tight text-black border-solid sm:text-2xl md:text-4xl text-center dark:text-dark-text-200">
            { t('head.zamanyxa') }
          </h2>
          <Content data={events} />
        </div>
      </div>
    </div>
  )
};

export default MainPage;
