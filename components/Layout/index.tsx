import Head from "next/head"
import Link from "next/link"
import styles from "./Layout.module.css"
import { GoOctoface } from "react-icons/go"
import { FaInstagram, FaRegStickyNote } from "react-icons/fa"
import { ImPriceTags } from "react-icons/im"
import { BiCoffeeTogo } from "react-icons/bi"

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

const LinkAway = ({ Component, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <span style={{ margin: "10px" }}>
            <Component />
        </span>
    </a>
)

const LinkInside = ({ Component, path }) => (
    <span style={{ margin: "10px" }}>
        <Link href={path}>
            <a>
                <Component />
            </a>
        </Link>
    </span>
)

const FooterNav = () => (
    <>
        {" "}
        <LinkAway url="https://github.com/mithi" Component={GoOctoface} />
        <LinkAway url="https://www.instagram.com/minimithi/" Component={FaInstagram} />
        <LinkAway url="https://ko-fi.com/minimithi/" Component={BiCoffeeTogo} />
        <LinkInside path="/tags" Component={ImPriceTags} />
        <LinkInside path="/notes" Component={FaRegStickyNote} />
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
            <FooterNav />
        </footer>
    </div>
)

export default Layout
