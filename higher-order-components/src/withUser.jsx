/* eslint-disable react/display-name */
import { useState, useEffect } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    // mock reading from DB by `userId`
    useEffect(() => {
      setUser({ id: userId, name: "Joe", age: 30, hairColor: "Brown", hobbies: ['code', 'cooking'] });
    }, []);

    if (!user) {
        return <p>Loading!!!</p>
    }

    return <Component {...props} user={user} />
  };
};
