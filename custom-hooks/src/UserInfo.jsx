/* eslint-disable react/prop-types */

import { useCallback } from "react";
import { useDataSource } from "./useDataSource";
// import { useResource } from "./useResource";
// import { useUser } from "./useUser";

const loadUser = async (userId) => {
  console.log("Loading user from server...");
  const loadedUser = {
    id: userId,
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "kayaking", "vigilantism"],
  };
  return loadedUser;
};

export const UserInfo = ({ userId }) => {
  // const { isLoading, user } = useUser(userId);
  const loadUserWithId = useCallback(() => loadUser(userId), [userId]);
  // ^ starting to get complicated but worth the effort
  const { isLoading, data: user } = useDataSource(loadUserWithId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const { name, age, hairColor, hobbies } = user;

  return (
    <>
      <h3>{userId}</h3>
      {/* ^ for demo only */}
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};
