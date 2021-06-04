import React, { useContext } from "react";

import { GoogleAuthContext } from "../../context/GoogleAuthContext";
import { Route, Redirect } from "react-router-dom";

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
