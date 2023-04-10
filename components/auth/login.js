import c from "./login.module.css";
import { useRef } from "react";
function Login(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(loginData);
  }
  return (
    <div className={c.modal1}>
      <div className={c.content}>
        <form>
          <div className={c.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={c.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={c.actions}>
            <button onClick={submitHandler}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
