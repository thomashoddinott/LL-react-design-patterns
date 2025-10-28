import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";

function App() {
  return (
    <>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
      <hr />
      <ResourceLoader resourceUrl={`/api/users/345`} resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
