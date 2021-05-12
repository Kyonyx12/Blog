import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GoogleAuthContext } from "../../context/GoogleAuthContext";

const LoginRoute = ({ component: Component, ...rest }) => {
  const { loged } = useContext(GoogleAuthContext);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !loged ? <Component {...props} /> : <Redirect exact to="/post" />
        }
      />
    </div>
  );
};

export default LoginRoute;
