import DefaultLayout from '@/app/layouts/root'
import "@/app/styles/globals.css"
import type { AppProps } from 'next/app'
import wrapper from '@/lib/store/store'
 
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default wrapper.withRedux(MyApp)
