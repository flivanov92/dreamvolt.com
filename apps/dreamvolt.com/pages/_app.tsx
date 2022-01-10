import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Welcome to dreamvolt.com!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default CustomApp;
