import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ overscrollBehavior: "none" }}>
      <Head />
      <body style={{ overscrollBehavior: "none" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
