import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>{err.status} {err.statusText}</h1>
      <h3>{err.error.message}</h3>
    </>
  );
}

export default Error;