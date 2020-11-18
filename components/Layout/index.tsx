import { useContext, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { ThemeContext } from "../Theme/index"
import styles from "./Layout.module.css"
import { GoOctoface } from "react-icons/go"
import { FaInstagram, FaRegStickyNote, FaMedium } from "react-icons/fa"
import { ImPriceTags } from "react-icons/im"
import { BiCoffeeTogo } from "react-icons/bi"
import { BsMoon } from "react-icons/bs"
import { HiSun } from "react-icons/hi"
import { GiFlowerPot, GiHamburgerMenu } from "react-icons/gi"

const LinkAway = ({ render, url }) => (
    <button className={styles.button}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <span>{render}</span>
        </a>
    </button>
)

const LinkInside = ({ render, path }) => (
    <button className={styles.button}>
        <span>
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
        <button className={styles.button} onClick={toggleTheme}>
            {theme === "light" ? lightRender : darkRender}
        </button>
    )
}
const FooterNav = () => (
    <>
        <LinkAway url="https://github.com/mithi" render={<GoOctoface />} />
        <LinkAway url="https://ko-fi.com/minimithi/" render={<BiCoffeeTogo />} />
        <LinkAway url="https://medium.com/@mithi" render={<FaMedium />} />
        <LinkAway url="https://www.instagram.com/minimithi/" render={<FaInstagram />} />
        <LinkInside path="/tags" render={<ImPriceTags />} />
        <LinkInside path="/notes" render={<FaRegStickyNote />} />
        <ThemeButton />
    </>
)
const Layout = ({ children }) => {
    const { bgColor, textColor } = useContext(ThemeContext)
    const [showMenu, setShowMenu] = useState(false)
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
                <button className={styles.button} onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu />
                </button>
                <ThemeButton />
            </header>

            <main className={styles.main}>
                {showMenu ? "this is the menu" : children}
            </main>

            <footer className={styles.footer}>
                <FooterNav />
            </footer>
        </div>
    )
}

export const FlowerPot = ({ fontSize = "3rem", margin = "10px" } = {}) => (
    <button style={{ fontSize, margin }}>
        <Link href="/all">
            <a>
                <GiFlowerPot />
            </a>
        </Link>
    </button>
)

export default Layout
