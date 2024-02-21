import Layout from '@/app/layouts/default'
import "@/app/styles/globals.css"
import type { AppProps } from 'next/app'
import wrapper from '@/lib/store/store'
 
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
