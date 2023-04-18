import React from 'react';
import { useTranslation } from 'react-i18next';

import RecommendCard from './RecommendCard.jsx';

import { useEventRecommend } from '../../../../hooks/events/useEventReacomend.js';

const RecommendSection = ({ event }) => {
  const [t, i18n] = useTranslation('eventPage');

  const { isLoading, recommend } = useEventRecommend(event.id);


  return isLoading ? <></> : (
    <div className=''>
      <h1 className="text-center bg-white rounded-md py-5 mx-auto text-2xl font-bold text-gray-500 dark:text-dark-text-400 dark:bg-dark-bg-900">{t('recommendations.recommend')}</h1>
      <section >
        <div className="mx-auto  grid max-w-7xl p-2 sm:grid-cols-2 lg:grid-cols-4">
          { recommend.slice(3).map((item) => <RecommendCard key={item.id} data={item}/>) }
        </div>
      </section>
      
    </div>
  );
};

export default RecommendSection;
