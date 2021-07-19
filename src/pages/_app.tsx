import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

/**
 * @see options: https://github.com/rstacruz/nprogress#configuration
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="green"
        startPosition={0.2}
        height={10}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
