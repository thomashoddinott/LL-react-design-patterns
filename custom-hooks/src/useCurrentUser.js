import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // mocking http call
  useEffect(() => {
    const loadedUser = {
      name: "John Doe",
      age: 54,
      hairColor: "brown",
      hobbies: ["swimming", "kayaking", "vigilantism"],
    };
    setUser(loadedUser);
    setIsLoading(false);
  }, []);

  return { isLoading, user };
};
