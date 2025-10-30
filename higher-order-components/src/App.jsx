import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);
// adds functionality (in this case printing props) to existing component without changing it

function App() {
  return (
    <UserInfoWrapped
      user={{
        name: "Joe Bloggs",
        age: 49,
        hairColor: "brown",
        hobbies: ["fishing"],
      }}
    />
  );
}

export default App;
