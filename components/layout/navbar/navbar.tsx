import Link from "next/link";

import useNavbarStyles from "./styles";

export type NavbarProps = {};

function Navbar({}: NavbarProps) {
  const classes = useNavbarStyles();
  return (
    <header className={classes.Navbar}>
      <h2>📚 Book Store</h2>
      <nav>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
