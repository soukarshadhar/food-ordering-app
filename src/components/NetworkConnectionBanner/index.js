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
    }

  }, [isOnline]);

  if (!showBanner) return null;

  return (
    <div className={`network-card ${isOnline ? "online" : "offline"}`}>
      {isOnline ? "✅ Back online" : "❌ No internet connection"}
    </div>
  );
}

export default NetworkConnectionBanner;