/* eslint-disable react/prop-types */

import { useResource } from "./useResource";
// import { useUser } from "./useUser";

export const UserInfo = ({ userId }) => {
  // const { isLoading, user } = useUser(userId);
  const { isLoading, data } = useResource("/users/123", {});

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const { name, age, hairColor, hobbies } = data;

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
