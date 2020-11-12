import '../static/css/main.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="app" class="app">
      <Component {...pageProps} />
    </div>
  )
}