import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, logout, selectUser } from "./userSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const loginToApp = () => {
    dispatch(setUser({ user: "Ahsan" }));
  };

  const logoutToApp = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Below is Redux Components</h2>
      {user ? <h2>{user} is logged in</h2> : <h2>Nobody logged in</h2>}
      <button onClick={loginToApp}>Login to App</button>
      <button onClick={logoutToApp}>logout</button>
    </div>
  );
}

export default Login;
