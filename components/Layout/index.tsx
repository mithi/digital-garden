import Head from "next/head"
import styles from "./Layout.module.css"

const Layout = ({ children }) => (
    <div className={styles.container}>
        <Head>
            <title>🌱 Mithi's Digital Garden 🌷</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
            <a href="https://github.com/mithi" target="_blank" rel="noopener noreferrer">
                Mithi 2020
            </a>
        </footer>
    </div>
)

export default Layout
