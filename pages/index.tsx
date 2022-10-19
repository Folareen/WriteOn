import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Bloga</title>
        <meta name="description" content="Setup a blog and write articles easily.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Bloga!
      </h1>

    </div>
  )
}

export default Home
