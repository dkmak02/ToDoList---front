const { Fragment } = require("react");
import c from "./info.module.css";
import Link from "next/link";
function AuthInfo() {
  return (
    <Fragment>
      <div className={c.list}>
        <h1>To create, add lists login/register</h1>
        <ul className={c.actions}>
          <li>
            <Link href="/auth/login" as="login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/auth/register" as="register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
export default AuthInfo;
