import { Home, Layout } from '@rainer/components'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RainerTech | Home</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
