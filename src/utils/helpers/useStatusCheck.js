import { useState } from "react";

const useStatusCheck = () => {
  const [status, setStatus] = useState(true);
  window.addEventListener("online", () => setStatus(true));
  window.addEventListener("offline", () => setStatus(false));

  return status;
};
export default useStatusCheck;
