import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StapperProgress from './partner-components/StapperProgress';
import PageProgress from './partner-components/PageProgress.jsx';
import Spinner from '../../common/Spinner.jsx';
import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes';

export default () => {
  const [isLoading, setLoading] = React.useState(true);
  const [stepper, setStepper] = React.useState({});
  const [currentStep, setCurrentStep] = React.useState(1);
  const [completeStep, setCompleteStep] = React.useState({
    step1: { isComplete: false, textWarning: '' },
    step2: { isComplete: false, textWarning: '' },
    step3: { isComplete: false, textWarning: '' },
    step4: { isComplete: false, textWarning: '' },
  });
  
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await $api.get(apiClientRoutes.getStepComplete());
        if (response.data.values.isRegister) {
          location.href = '/admin';
        }
        Object.entries(response.data.values)
          .filter((item) => item[0] !== 'iter')
          .forEach(([key, value]) => {
            setCompleteStep((prev) => ({
              ...prev,
              [key]: { isComplete: value },
            }));
          });
        setStepper(response.data.values);
        setCurrentStep(response.data.values.iter);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container m-auto flex flex-col dark:bg-gray-900">
      <StapperProgress
        stepper={stepper}
        setStepper={setStepper}
        completeStep={completeStep}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <PageProgress
        step={currentStep}
        completeStep={completeStep}
        setCompleteStep={setCompleteStep}
      />
    </div>
  );
};
