import { createContext, useState, useEffect } from "react";
import "firebase/auth";

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const [loged, setLoged] = useState(null);

  const onLogedChange = (boolean) => {
    setLoged(boolean);
  };

  useEffect(() => {
    if (localStorage.loged === "true") {
      onLogedChange(true);
    } else {
      onLogedChange(false);
    }
  }, []);

  return (
    <GoogleAuthContext.Provider value={{ loged, onLogedChange }}>
      {children}
    </GoogleAuthContext.Provider>
  );
};
