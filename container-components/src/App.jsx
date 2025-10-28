import axios from "axios";

import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import { DataLoader } from "./DataLoader";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getTestData = async () => {
  return {
    id: 789,
    name: "Joe Bloggs",
    age: 9,
    hairColor: "blond",
    hobbies: ["snooker", "fishing", "cigar smoking"],
  };
};

function App() {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <hr />
      <ResourceLoader resourceUrl={`/api/users/234`} resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <hr />
      <DataLoader
        resourceName="user"
        getDataFn={getServerData("/api/users/345")}
      >
        <UserInfo />
      </DataLoader>
      <DataLoader resourceName="user" getDataFn={getTestData}>
        <UserInfo />
      </DataLoader>
    </>
  );
}

export default App;
