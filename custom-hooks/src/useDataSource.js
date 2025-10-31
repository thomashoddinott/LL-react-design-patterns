import { useEffect, useState } from "react";

export const useDataSource = (getResourceFn, defaultValue = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);
  // mocking http call
  useEffect(() => {
    (async () => {
      const result = await getResourceFn();
      setData(result);
      setIsLoading(false);
    })();
  }, [getResourceFn]);

  return { isLoading, data };
};
