import Head from 'next/head'
import DefaultLayout from '@/app/layouts/root'
import "@/app/styles/globals.css"
import type { AppProps } from 'next/app'
import wrapper from '@/lib/store/store'
 
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Drizzle Weather</title>
        <meta name="description" content="Drizzle Weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default wrapper.withRedux(MyApp)
