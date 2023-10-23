import { useEffect } from "react";

const useLog = (message = "", type) => {
  useEffect(() => {
    if (type === "err") {
      console.error("ERROR: REACT_PROJECT[NUME-PRENUME]: ", message);
    }
  }, [message, type]);

  return;
};

export default useLog;
