import Link from "next/link";
import useFooterStyles from "./styles";
import { useTheme } from "../../../store/theme-context";

export type FooterProps = {};

function Footer({}: FooterProps) {
  const { theme } = useTheme();
  const classes = useFooterStyles({ theme });
  return (
    <footer className={classes.Footer}>
      <p>
        Created by{" "}
        <Link href="https://github.com/samueldusek">
          <a>Samuel Dušek</a>
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
