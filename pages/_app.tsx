import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient } from '@liveblocks/client'
import { LiveblocksProvider, RoomProvider } from '@liveblocks/react'

const client = createClient({
  publicApiKey: 'pk_test_O0rKHMk29G6hBrVeaxoE4G2a'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LiveblocksProvider client={client}>
      <RoomProvider id="test-room">
        <Component {...pageProps} />
      </RoomProvider>
    </LiveblocksProvider>
  )
}

export default MyApp
