import React from "react";

import Spinner from "../common/Spinner.jsx";

const OrganizationPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoad = () => {
    try {
      console.log('sasi zagryzka: ' + isLoading);
      setIsLoading(false);
    } catch (error) {
      console.log('error pizdec! ' + error);
    }
  }

  React.useState(() => {
    onLoad();
  }, []);

  return (
    <div>
      {
        isLoading
        ?
        <Spinner />
        :
        <div>
          <p>This is OrganizationPage</p>
        </div>
      }
    </div>
  )
}

export default OrganizationPage;
