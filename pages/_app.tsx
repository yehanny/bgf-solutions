import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages} timeZone="America/Caracas">
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

export default MyApp;
