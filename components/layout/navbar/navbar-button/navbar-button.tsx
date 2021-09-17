import useNavbarButtonStyles from "./styles";
import { useTheme } from "../../../../store/theme-context";
import { MouseEventHandler } from "react";

export type NavbarButtonProps = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const NavbarButton = ({ isOpen, onClick }: NavbarButtonProps) => {
  const { theme } = useTheme();
  const classes = useNavbarButtonStyles({ theme });
  return (
    <button className={classes.NavbarButton} onClick={onClick}>
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

export default NavbarButton;
