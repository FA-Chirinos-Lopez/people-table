import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <Component {...pageProps} />
  </>

}

export default MyApp
