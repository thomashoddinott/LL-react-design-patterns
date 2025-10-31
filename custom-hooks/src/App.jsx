import { useCurrentUserId } from "./useCurrentUserId";
import { UserInfo } from "./UserInfo";

function App() {
  const currentUserId = useCurrentUserId();
  return (
    <>
      <UserInfo userId="123" />;
      <UserInfo userId="234" />;
      <UserInfo userId={currentUserId} />;
    </>
  );
}

export default App;
