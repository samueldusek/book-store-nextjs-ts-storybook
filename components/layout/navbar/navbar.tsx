import Link from "next/link";
import DarkModeToggle from "react-dark-mode-toggle";
import { useRouter } from "next/router";
import { useTheme } from "../../../store/theme-context";

import useNavbarStyles from "./styles";

export type NavbarProps = {};

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, theme } = useTheme();
  const classes = useNavbarStyles({ theme });
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className={classes.Navbar}>
      <h2>📚 Book Store</h2>
      <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={60}
        speed={1.6}
      />
      <nav>
        <Link href="/">
          <a className={pathname === "/" ? "active" : undefined}>HOME</a>
        </Link>
        <Link href="/contact">
          <a className={pathname === "/contact" ? "active" : undefined}>
            CONTACT
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
