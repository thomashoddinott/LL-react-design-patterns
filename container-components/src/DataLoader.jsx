import React, { useEffect, useState } from "react";

export const DataLoader = ({
  getDataFn = () => {},
  resourceName,
  children,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await getDataFn();
      setData(newData);
    })();
  }, []);

  return (
    data &&
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { [resourceName]: data });
      }
      return child;
    })
  );
};
