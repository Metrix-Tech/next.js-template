import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import { ConfigProvider } from "antd";
import antdTheme from "@/src/theme";
import { useEffect } from "react";
import { useRouter } from "next/router";
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document?.querySelector("body")?.setAttribute("dir", dir);
  }, [locale]);
  return (
    <ConfigProvider theme={antdTheme}>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default appWithTranslation(App);
