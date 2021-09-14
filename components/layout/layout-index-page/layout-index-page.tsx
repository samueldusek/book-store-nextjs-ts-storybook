import useLayoutIndexPageStyles from "./styles";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutIndexPageStyles();
  return <main className={classes.layoutIndexPage}>{children}</main>;
};

export default Layout;
