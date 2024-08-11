import Document, { Html, Main, NextScript, Head } from "next/document";

async function getInitialProps(ctx: any) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
}
function MyDocument({ ...props }: any) {
  const { locale } = props;
  return (
    <Html dir={locale === "ar" ? "rtl" : "ltr"}>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
