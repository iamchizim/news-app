import React, { useEffect, useState } from "react";

const ErrorMessage = ({ news }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!news || news.length === 0) {
      setErrorMessage("News updates are unavailable at the moment. Please try again soon");
    } else {
      setErrorMessage("");
    }
  }, [news]);

  return <section  className="error">{errorMessage && <p>{errorMessage}</p>}</section>;
};

export default ErrorMessage;