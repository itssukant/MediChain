import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="04eAi5abqIJ1LQMvtY1AoT9aSCLoRrMb4a6RJFWB"
      serverUrl="https://zygsqgz1u7km.usemoralis.com:2053/server"
    >
      {<Component {...pageProps} />}
    </MoralisProvider>
  );
}

export default MyApp;