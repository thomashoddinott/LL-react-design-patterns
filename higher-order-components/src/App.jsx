import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWrappedOne = printProps(UserInfo);
// ^ adds functionality (in this case printing props) to existing component without changing it
const UserInfoWrappedTwo = withUser(UserInfo);
const UserInfoWrappedThree = withUser(printProps(UserInfo), '123');

function App() {
  return (
    // <UserInfoWrappedOne
    //   user={{
    //     name: "Joe Bloggs",
    //     age: 49,
    //     hairColor: "brown",
    //     hobbies: ["fishing"],
    //   }}
    // />

    // <UserInfoWrappedTwo/>

    <UserInfoWrappedThree />
  );
}

export default App;
