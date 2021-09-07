export const styles = {
  Card: {
    width: "100%",
    maxWidth: "100px",
    "& a": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.4s 0s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  },
  image: {
    width: "90%",
    margin: "auto",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "-3px -3px 20px #d5d5d5, 4px 4px 14px #ffffff",
  },
  name: {
    marginTop: "0.3rem",
    fontSize: "0.9rem",
    textAlign: "center",
  },
};
