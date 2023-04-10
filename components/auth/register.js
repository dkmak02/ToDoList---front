import c from "./login.module.css";
import { useRef } from "react";
function Login(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();
  const nameInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConfirm = passwordConfirmInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const singUpData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      passwordConfirm: enteredPasswordConfirm,
    };
    console.log(singUpData);
  }
  return (
    <div className={c.modal1}>
      <div className={c.content}>
        <form>
          <div className={c.control}>
            <label htmlFor="name">Name</label>
            <input type="string" id="name" required ref={nameInputRef} />
          </div>
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
          <div className={c.control}>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              required
              ref={passwordConfirmInputRef}
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
