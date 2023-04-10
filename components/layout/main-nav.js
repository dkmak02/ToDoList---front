import Link from "next/link";
import c from "./main-nav.module.css";
function MainNav() {
  return (
    <header className={c.header}>
      <div className={c.logo}>
        <Link href="/">Main Page</Link>
      </div>
      <nav className={c.navigation}>
        <ul>
          <li>
            <Link href="/xd">Posts</Link>
          </li>
          <li>
            <Link href="/xd">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
