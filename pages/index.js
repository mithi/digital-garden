import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mithi's Digital Garden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1><Link href="/"><a>Mithi's Digital Garden</a></Link></h1>

      <p>
        This is a place where I drop notes about things on my mind. The entries here are mostly
        incomplete thoughts; they mostly won't useful for anyone else but me. Sorry you've stumbled
        upon this, but there is nothing really to see here.
        You might find my <a
          href="https://hexapod.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >Hexapod Robot Simulator</a> amusing though! Bye!
      </p>

      </main>

      <footer className={styles.footer}>
      <a
          href="https://github.com/mithi"
          target="_blank"
          rel="noopener noreferrer"
        >Mithi 2020</a>
      </footer>
    </div>
  )
}
