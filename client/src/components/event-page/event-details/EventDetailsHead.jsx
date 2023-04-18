import React from 'react';
import '../../css/EventDetailsHead.css';
import { useTranslation } from 'react-i18next';

import Showdown from 'showdown';
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const EventDetailsHead = ({ eventData, setEdit, edit, }) => {
  const { title, description, categories, poster } = eventData;
  const [t, i18n] = useTranslation('eventPage');
  return (
    <div>
      <h1 className="text-center text-5xl pb-6 px-4 dark:text-dark-text-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h1>
      <div className="Map">
        <div className="flex flex-row items-center ml-6">
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
            <div className='w-12 h-72 bg-[#0c2e41] rounded-t-md'></div>
            <div className='w-12 h-2 bg-yellow-600 rounded-t-full -mt-2'></div>
            <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
          </div>
          <div
            className=' box-content relative h-full w-full relative border-[#0c2e41] border-8 slide-ltr sliding-ltr flex flex-row ease '> 
            <img className='h-full object-fit'src="https://london.thecomedystore.co.uk/wp-content/uploads/sites/2/2022/03/SUFU-ukraine-header.png"></img>
        
          </div>
        </div>
      </div>

      <p className="text-3xl pb-1 dark:text-dark-text-200 ml-6">Про подію</p>
        <div className="max-w-full">
        <p className="text-event-description2 dark:text-dark-text-200 ml-6">Моновистава в стилі стендап "Про що мовчать чоловіки" в Києві</p>
        {/* Description */}
          <div className="max-w-full ml-7">
            <div class=" text-base py-7 pl-2text-gray-600 mt-1 dark:text-dark-text-300">
              <p class="mt-4">З 18 березня у Підвалі Культури, що у Києві, показуватимуть моновиставу "Про що мовчать чоловіки". Головну роль у постановці зіграє український актор, режисер і сценарист Дмитро Суржиков, за плечима якого сотні ролей. </p>
              <p class="mt-4">Особливість вистави полягає в тому, що вона презентується в новому форматі та абсолютно відходить від класичних жанрових традицій. "Про що мовчать чоловіки" побудована за правилами нового жанру — стендап.</p>
              <p class="mt-4">Щоб потрапити на цей захід, там достатньо купити електронний квиток на цій сторінці. Втім, на сайті "Kontramarka" ви можете придбати квитки на всі події театру Підвалу Культури.</p>
              <ul class="ml-12 list-disc">
                  <li>Смішно</li>
                  <li>Дешево</li>
                  <li>Емоційно</li>
              </ul>
            </div>
          <p className="text-event-description2 dark:text-dark-text-200 ml-6">Так "Про що мовчать чоловіки"?</p>
            <div class=" text-base py-7 pl-2text-gray-600 mt-1 dark:text-dark-text-300">
              <p class="mt-4">Постановка, яка розігруватиметься на сцені Підвалу Культури, створена за п'єсою коміка Роба Беккера "Defending the Caveman". Вона стала популярною у США наприкінці 90-х рр. настільки, що одну з вулиць Нью-Йорка перейменували на "Дорогу Печерної людини" (аналог назви п'єси). </p>
              <p class="mt-4">Інтерес до твору не пропав і досі, тож театральні постановки за мотивами п'єси сьогодні можна помітити на сценах театрів по всьому світу. І кожна інтерпретація — це спосіб дати відповіді на найпотаємніші питання, розкрити тему щастя сімейних стосунків і показати абсурдність конфліктних ситуацій</p>
              <p class="mt-4">Заглядайте до Підвалу Культури й ви дізнаєтеся, як досягти гармонії у стосунках! </p>
            </div>
            <p className='dark:text-dark-text-300'>До зустрічі!</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsHead;
