import Link from "next/link";
import c from "./main-nav.module.css";
import AuthInfo from "../auth/info";
function MainNav() {
  return (
    <header className={c.header}>
      <div className={c.logo}>
        <Link href="/">Main Page</Link>
      </div>
      <nav className={c.navigation}>
        <ul>
          <AuthInfo />
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
