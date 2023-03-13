import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fosshost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Fosshost" />
        <p className="description">
          We are curerntly accepting applications for bare metal hardware <code>pages/apply.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
