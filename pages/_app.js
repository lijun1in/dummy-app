import "../styles/globals.css";

import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const res = await fetch("http://localhost:1337/global");
  const globalData = await res.json();

  return {
    ...appProps,
    pageProps: {
      global: globalData,
    },
  };
};

export default MyApp;
