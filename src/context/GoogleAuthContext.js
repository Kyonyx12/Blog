import { createContext, useState, useEffect } from "react";
import "firebase/auth";

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const [loged, setLoged] = useState(null);
  const [user, setUser] = useState(null);

  const onLogedChange = (boolean, user) => {
    setLoged(boolean);
    setUser(user);
  };

  useEffect(() => {
    if (localStorage.loged === "true") {
      const username = localStorage.username;
      const profileImg = localStorage.profileImg;
      onLogedChange(true, { username, profileImg });
    } else {
      onLogedChange(false, null);
    }
  }, []);

  return (
    <GoogleAuthContext.Provider value={{ loged, onLogedChange, user }}>
      {children}
    </GoogleAuthContext.Provider>
  );
};
