import Link from "next/link";
import useFooterStyles from "./styles";

export type FooterProps = {};

function Footer({}: FooterProps) {
  const classes = useFooterStyles();
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
