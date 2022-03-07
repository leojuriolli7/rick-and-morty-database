import { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
