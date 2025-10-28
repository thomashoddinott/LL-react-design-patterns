import React, { useState, useEffect } from "react";

export function LocalStorageProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("appData"));
    setData(localData);
  }, []);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { data })
      )}
    </>
  );
}
