import { Html, Head, Main, NextScript } from "next/document";
import Topo from "../components/_topo";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {Topo()}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
