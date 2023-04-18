import React from 'react';
import StapperLine from './steppet-components/StapperLine.jsx';
import CompliteLine from './steppet-components/CompliteLine.jsx';
import svgStep from '../../../../other/svg-step.jsx';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const StapperProgress = ({
  completeStep,
  stepper,
  setStepper,
  setCurrentStep,
  currentStep,
}) => {
  const [t, i18n] = useTranslation('header');
  const isCompleteStep = completeStep['step' + stepper.iter]?.isComplete || true;
  const stepTextWar = completeStep['step' + stepper.iter]?.textWarning;
  const handleClick = () => {
    if (stepper.iter === 5) {
      setStepper((prev) => ({
        ...prev,
        ['step' + stepper.iter]: true,
      }));
      location.href = '/admin'
      return;
    }
    setCurrentStep(currentStep + 1);
    setStepper((prev) => ({
      ...prev,
      ['step' + stepper.iter]: !stepper['step' + stepper.iter],
      iter: stepper.iter + 1,
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center mt-20 ">
        <div className="w-[90%]">
          <ol className="flex items-center w-full">
            {svgStep.map(({ start, end, isEnd }, iter) => {
              return (
                <>
                  {!stepper['step' + (iter + 1)] ? (
                    <StapperLine
                      setCurrentStep={setCurrentStep}
                      currentStep={currentStep}
                      iter={iter + 1}
                      step={stepper.iter}
                      isEnd={isEnd}
                    >
                      {' '}
                      {start}{' '}
                    </StapperLine>
                  ) : (
                    <CompliteLine
                      setCurrentStep={setCurrentStep}
                      step={iter + 1}
                      isEnd={isEnd}
                    >
                      {' '}
                      {end}{' '}
                    </CompliteLine>
                  )}
                </>
              );
            })}
          </ol>
        </div>

        <button
          className={`${isCompleteStep ? '' : 'opacity-80'}
          bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700
          transition p-10 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}
          onClick={(e) => {
            if (!isCompleteStep) {
              toast.dismiss();
              toast.warning('stepTextWar');
              return;
            }
            handleClick(e)
          }}
        >
          {stepper.iter <= 3 ? 'next' : 'finish'}
        </button>
      </div>
    </>
  );
};

export default StapperProgress;
