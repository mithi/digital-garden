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
import { GiFlowerPot } from "react-icons/gi"

const Nav = () => {
    return (
        <>
            <LinkInside path="/" render="🌷" />
            <ThemeButton light="🌼" dark="🌙" />
        </>
    )
}

const LinkAway = ({ render, url }) => (
    <button style={{ fontSize: "1.6rem" }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <span style={{ margin: "10px" }}>{render}</span>
        </a>
    </button>
)

const LinkInside = ({ render, path }) => (
    <button style={{ fontSize: "1.6rem" }}>
        <span style={{ margin: "10px" }}>
            <Link href={path}>
                <a>{render}</a>
            </Link>
        </span>
    </button>
)

type themeButtonPropsType = {
    light?: any
    dark?: any
}

const ThemeButton = ({ light, dark }: themeButtonPropsType) => {
    const lightRender = light || <HiSun />
    const darkRender = dark || <BsMoon />

    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button
            style={{ fontSize: "1.6rem", color: "var(--c0-primary)" }}
            onClick={toggleTheme}
        >
            {theme === "light" ? lightRender : darkRender}
        </button>
    )
}
const FooterNav = () => (
    <>
        <LinkAway url="https://github.com/mithi" render={<GoOctoface />} />
        <LinkAway url="https://www.instagram.com/minimithi/" render={<FaInstagram />} />
        <LinkAway url="https://ko-fi.com/minimithi/" render={<BiCoffeeTogo />} />
        <LinkInside path="/tags" render={<ImPriceTags />} />
        <LinkInside path="/notes" render={<FaRegStickyNote />} />
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

export const FlowerPot = ({ fontSize = "3rem", margin = "10px" } = {}) => (
    <button style={{ fontSize, margin }}>
        <Link href="/notes">
            <a>
                <GiFlowerPot />
            </a>
        </Link>
    </button>
)

export default Layout
