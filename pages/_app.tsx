import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import GlobalStyles from "../utils/GlobalStyles";
import SanMarzanoTheme from "../utils/theme";
import { useStore } from "../store";

import { useApollo } from "../utils/apolloClient";
import Sidebar from "../components/Sidebar";

const AppWrapper = ({ Component, pageProps }: any) => {
  return (
    <>
      {/* <Nav /> */}
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
};

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider theme={SanMarzanoTheme}>
          <GlobalStyles />
          {apolloClient && (
            <ApolloProvider client={apolloClient}>
              <AppWrapper
                Component={Component}
                pageProps={pageProps}
                {...rest}
              />
            </ApolloProvider>
          )}
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
export default MyApp;
