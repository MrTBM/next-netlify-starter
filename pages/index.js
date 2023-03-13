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
          We are currently accepting applications for bare metal hardware.  You can register your interest here. 
    It is with unfortunate regret that we no longer provide hosting services to tenants directly.
        </p>
    
    <p>
    If you need help please email helpme@fosshost.org
      </main>

      <Footer />
    </div>
  )
}
