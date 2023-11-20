import { createContext, useState } from "react";

export const UsernameContext = createContext("");

export default function UsernameProvider(props) {
  const [username, setUsername] = useState("");

  return (
    <UsernameContext.Provider value={[username, setUsername]}>
      {props.children}
    </UsernameContext.Provider>
  );
}

