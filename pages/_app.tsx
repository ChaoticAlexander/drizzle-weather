import Layout from '@/app/layouts/default'
import "@/app/styles/globals.css"
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import createStore from '@/lib/store/store'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore()

  return (
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </Provider>
    )
}