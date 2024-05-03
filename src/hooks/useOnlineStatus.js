import { useEffect, useState, createContext, useContext } from "react";

const OnlineStatusContext = createContext(true);

export const OnlineStatusProvider = ({ children }) => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => setOnline(false));
    window.addEventListener("online", () => setOnline(true));
  }, []);

  return (
    <OnlineStatusContext.Provider value={online}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

const useOnlineStatus = () => {
  const value = useContext(OnlineStatusContext);
  return value;
};

export default useOnlineStatus;
