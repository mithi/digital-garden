import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout"
export default function Home() {

  return (
    <Layout>
      <h1><Link href="/"><a> 🌱 Mithi's Digital Garden 🌷 </a></Link></h1>

<p>
  This is a place where I drop notes about things on my mind. The entries here are mostly
  incomplete thoughts; they probably won't useful for anyone else but me. Sorry you've stumbled
  upon this, but there is really nothing really to see here.
  You might find my <a
    href="https://hexapod.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
  >Hexapod Robot Simulator</a> amusing though! Bye!
</p>

    </Layout>
  )
}
