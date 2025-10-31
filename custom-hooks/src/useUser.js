import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // mocking http call passing `userId`
  useEffect(() => {
    const loadedUser = {
      id: userId,
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
