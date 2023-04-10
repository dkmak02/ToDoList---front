const { Fragment } = require("react");
import c from "./info.module.css";
import Link from "next/link";
import Login from "./login";
import Register from "./register";
import { useState } from "react";
import Backdrop from "./backdrop";
function AuthInfo() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  function loginHandler() {
    setIsLogin(true);
    setBackdrop(true);
  }
  function registerHandler() {
    setBackdrop(true);
    setIsRegister(true);
  }
  function backdropHandler() {
    setBackdrop(false);
    setIsLogin(false);
    setIsRegister(false);
  }
  return (
    <Fragment>
      <div className={c.list}>
        <h1>To create, add lists login/register</h1>
        <ul className={c.actions}>
          <li>
            <button onClick={loginHandler}>Login</button>
          </li>
          <li>
            <button onClick={registerHandler}>Register</button>
          </li>
        </ul>
      </div>
      {backdrop && <Backdrop onCancel={backdropHandler} />}
      {isLogin && <Login />}
      {isRegister && <Register />}
    </Fragment>
  );
}
export default AuthInfo;
