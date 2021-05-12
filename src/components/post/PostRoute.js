import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GoogleAuthContext } from "../../context/GoogleAuthContext";

const PostRoute = ({ component: Component, ...rest }) => {
  const { loged } = useContext(GoogleAuthContext);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          loged ? (
            <Component {...props} />
          ) : (
            <Redirect exact from="/post" to="/login" />
          )
        }
      />
    </div>
  );
};

export default PostRoute;
