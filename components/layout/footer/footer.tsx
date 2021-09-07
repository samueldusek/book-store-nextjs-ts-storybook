import React from "react";
import useFooterStyles from "./styles";

export type FooterProps = {};

function Footer({}: FooterProps) {
  const classes = useFooterStyles();
  return (
    <footer className={classes.Footer}>
      <p>
        Created by <a href="https://github.com/samueldusek">Samuel Dušek</a>.
      </p>
    </footer>
  );
}

export default Footer;
