import { useEffect, useState } from "react";

export const useResource = (url, defaultValue = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);

  // mocking http call
  useEffect(() => {
    console.log('loading data from useResource')
    const loadedData = {
      name: "John Doe",
      age: 54,
      hairColor: "brown",
      hobbies: ["swimming", "kayaking", "vigilantism"],
    };
    setData(loadedData);
    setIsLoading(false);
  }, []);

  return { isLoading, data };
};
