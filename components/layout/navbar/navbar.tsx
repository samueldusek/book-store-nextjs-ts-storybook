import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "react-dark-mode-toggle";
import NavbarButton from "./navbar-button/navbar-button";
import { useRouter } from "next/router";
import { useTheme } from "../../../store/theme-context";

import useNavbarStyles from "./styles";

export type NavbarProps = {};

const Navbar = () => {
  const [isSmallNavbarOpen, setIsSmallNavbarOpen] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode, theme } = useTheme();
  const classes = useNavbarStyles({ theme });
  const router = useRouter();
  const { pathname } = router;
  const toggleSmallNavbar = () => {
    setIsSmallNavbarOpen((prevState) => !prevState);
  };
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
      <NavbarButton isOpen={isSmallNavbarOpen} onClick={toggleSmallNavbar} />
      {isSmallNavbarOpen && (
        <div className={classes.smallNavbar}>
          <Link href="/">
            <a className={pathname === "/" ? "active" : undefined}>HOME</a>
          </Link>
          <Link href="/contact">
            <a className={pathname === "/contact" ? "active" : undefined}>
              CONTACT
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
