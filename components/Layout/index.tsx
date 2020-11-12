import { useContext } from "react"
import Head from "next/head"
import Link from "next/link"
import { ThemeContext } from "../Theme/index"
import styles from "./Layout.module.css"
import { GoOctoface } from "react-icons/go"
import { FaInstagram, FaRegStickyNote } from "react-icons/fa"
import { ImPriceTags } from "react-icons/im"
import { BiCoffeeTogo } from "react-icons/bi"
import { BsMoon } from "react-icons/bs"
import { HiSun } from "react-icons/hi"

const Nav = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <Link href="/">
                <a> 🌱 </a>
            </Link>
            <button style={{ fontSize: "1.6rem" }} onClick={toggleTheme}>
                {theme === "light" ? "🌼" : "🌙"}
            </button>
            <Link href="/notes">
                <a> 🌷 </a>
            </Link>
        </>
    )
}

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

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button
            style={{ fontSize: "1.6rem", color: "var(--c0-primary)" }}
            onClick={toggleTheme}
        >
            {theme === "light" ? <HiSun /> : <BsMoon />}
        </button>
    )
}
const FooterNav = () => (
    <>
        <LinkAway url="https://github.com/mithi" Component={GoOctoface} />
        <LinkAway url="https://www.instagram.com/minimithi/" Component={FaInstagram} />
        <LinkAway url="https://ko-fi.com/minimithi/" Component={BiCoffeeTogo} />
        <LinkInside path="/tags" Component={ImPriceTags} />
        <LinkInside path="/notes" Component={FaRegStickyNote} />
        <ThemeButton />
    </>
)
const Layout = ({ children }) => {
    const { bgColor, textColor } = useContext(ThemeContext)

    return (
        <div
            className={styles.container}
            style={{ color: textColor, backgroundColor: bgColor }}
        >
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
}

export default Layout
