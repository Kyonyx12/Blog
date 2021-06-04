import { createContext, useState, useEffect } from "react";
import "firebase/auth";

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const [loged, setLoged] = useState(null);
  const [username, setUsername] = useState(null);

  const onLogedChange = (boolean, username) => {
    setLoged(boolean);
    setUsername(username);
  };

  useEffect(() => {
    if (localStorage.loged === "true") {
      const username = localStorage.username;
      onLogedChange(true, username);
    } else {
      onLogedChange(false, "");
    }
  }, []);

  return (
    <GoogleAuthContext.Provider value={{ loged, onLogedChange, username }}>
      {children}
    </GoogleAuthContext.Provider>
  );
};
