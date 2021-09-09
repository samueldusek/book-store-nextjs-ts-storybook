import useLayoutDetailPageStyles from "./styles";
import { ApolloProvider } from "@apollo/client";
import client from "../../../apollo-client";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutDetailPageStyles();
  return (
    <main className={classes.layoutDetailPage}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </main>
  );
};

export default Layout;
