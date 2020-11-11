import Head from "next/head"
import Link from "next/link"
import styles from "./Layout.module.css"

const Nav = () => (
    <>
        <Link href="/">
            <a> 🌱 </a>
        </Link>
        <Link href="/notes">
            <a> 🌷 </a>
        </Link>
        <Link href="/tags">
            <a> 🌸 </a>
        </Link>
    </>
)
const Layout = ({ children }) => (
    <div className={styles.container}>
        <Head>
            <title>🌱 Mithi's Digital Garden 🌷</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
            <Nav />
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
            <a href="https://github.com/mithi" target="_blank" rel="noopener noreferrer">
                Mithi © 2020
            </a>
        </footer>
    </div>
)

export default Layout
