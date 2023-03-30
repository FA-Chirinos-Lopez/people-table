import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <head><meta name="apple-mobile-web-app-capable" content="yes" /></head>


    <Component {...pageProps} />
  </>

}

export default MyApp
