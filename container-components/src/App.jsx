import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <hr />
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
