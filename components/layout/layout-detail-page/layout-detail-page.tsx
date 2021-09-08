import useLayoutDetailPageStyles from "./styles";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutDetailPageStyles();
  return <main className={classes.layoutDetailPage}>{children}</main>;
};

export default Layout;
