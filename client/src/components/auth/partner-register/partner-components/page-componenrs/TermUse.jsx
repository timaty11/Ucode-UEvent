import React from 'react';
import AccordionComponent from '../../../../common/Accordion.jsx';
import textTermUse from '../../../../../other/text-term-use.js';
import $api from '../../../../../../utils/api.js';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes.js';
import { AccordionBody } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

const RenderItemAccordion = ({
  setReading,
  head,
  body,
  completeStep,
  count,
  open,
  handleOpen,
}) => {
  const [t, i18n] = useTranslation('term-use');
  const [read, setRead] = React.useState(
    false || completeStep.step1.isComplete
  );

  return (
    <div className="mb-4 " key={count} >
      <AccordionComponent 
        handleOpen={handleOpen}
        open={open}
        head={head}
        style={read ? 'bg-green-100 ' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200'}
        count={count + 1}
      >
        <AccordionBody  >
          <p className='dark:text-gray-200'>
          {
            body
          }
          </p>
          </AccordionBody>
        <div className="w-full flex justify-end ">
          <button
            onClick={() => {
              setRead(!read);
              setReading((prev) => [...prev, head]);
            }}
            type='submit'
            disabled={read}
            className={`transition px-4 py-2 text-white 
                          ${
                            read
                              ? 'bg-green-600'
                              : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-60 dark:hover:bg-primary-700 '
                          } 
                          font-medium rounded-lg 
                          text-sm text-center 
                          dark:focus:ring-primary-800 `}
          >
            {read ? t('step1.button-complete') : t('step1.button-read')}
          </button>
        </div>
      </AccordionComponent>
    </div>
  );
};

const TermUse = ({ setCompleteStep, completeStep }) => {
  const [t, i18n] = useTranslation('term-use');
  const [open, setOpen] = React.useState(0);
  const [reading, setReading] = React.useState([]);
  console.log(reading)

  const handleOpen = async (value) => {
    setOpen(open === value ? 0 : value);
    console.log('1')
    if (reading.length === 5) {
      try {
        const response = await $api.post(apiClientRoutes.createOrganization(1));
        console.log(response)
        setCompleteStep((prev) => ({
          ...prev,
          step1: {
            isComplete: true,
          },
        }));
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="animate-active-page min-h-full  ">
      <section className="text-gray-700">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4  dark:text-gray-200">
            {t('step1.title')}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-gray-400">
            {t('step1.text')}
            </p>
          </div>
          <form
            onSubmit={(e) => {e.preventDefault()}}
            className="flex flex-wrap sm:mx-auto -mx-2 "
          >
            {textTermUse().map((item, i) => (
              <div key={i} className="w-full lg:w-1/2 lg:px-4 lg:py-2 ">
                {item[`text${i + 1}`].map(({ head, body, iter }) => {
                  return (
                    <RenderItemAccordion
                      setReading={setReading}
                      key={iter}
                      head={head}
                      body={body}
                      completeStep={completeStep}
                      count={iter}
                      open={open}
                      setOpen={setOpen}
                      handleOpen={handleOpen}
                    />
                  );
                })}
              </div>
            ))}
          </form>
        </div>
      </section>
    </div>
  );
};

export default TermUse;
