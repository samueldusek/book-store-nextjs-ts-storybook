import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "../../../store/theme-context";

import useNavbarStyles from "./styles";

export type NavbarProps = {};

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);
  const { toggleDarkMode } = themeCtx;
  const classes = useNavbarStyles();
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className={classes.Navbar}>
      <h2>📚 Book Store</h2>
      <nav>
        <Link href="/">
          <a className={pathname === "/" ? "active" : undefined}>HOME</a>
        </Link>
        <Link href="/contact">
          <a className={pathname === "/contact" ? "active" : undefined}>
            CONTACT
          </a>
        </Link>
        <button onClick={() => toggleDarkMode()}>Dark Mode</button>
      </nav>
    </header>
  );
};

export default Navbar;
