import useLayoutBasicPageStyles from "./styles";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutBasicPageStyles();
  return <main className={classes.layoutBasicPage}>{children}</main>;
};

export default Layout;
