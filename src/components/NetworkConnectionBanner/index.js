import React, { useState, useEffect } from "react";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const NetworkConnectionBanner = () => {
  const isOnline = useOnlineStatus();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isOnline && showBanner) {
      timer = setTimeout(() => setShowBanner(false), 4000);
    }

    if (!isOnline) {
      setShowBanner(true);
    }

    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, [isOnline]);

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-2.5 px-2.5 py-2 text-white left-1/2 -translate-x-2/4 rounded-lg shadow-lg ${
        isOnline ? "bg-green-700" : "bg-black"
      }`}
    >
      {isOnline ? "✅ Back online" : "❌ No internet connection"}
    </div>
  );
};

export default NetworkConnectionBanner;
