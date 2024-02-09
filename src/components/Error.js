import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="GenericError__container">
      <div className="GenericError__content">
        <div className="GenericError__image"></div>
        <div className="GenericError__title">Oops, something went wrong!</div>
        <div className="GenericError__description">
          {error.status}: We can't seem to find the page you're looking for... Sorry for the inconvenience.
        </div>
      </div>
    </div>
  );
};

export default Error;
