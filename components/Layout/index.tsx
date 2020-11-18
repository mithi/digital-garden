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
import { HiSun, HiHome } from "react-icons/hi"
import { GiFlowerPot, GiHamburgerMenu } from "react-icons/gi"

const LinkAway = ({ render, url, style = {} }) => (
    <button className={styles.button} {...{ style }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <span>{render}</span>
        </a>
    </button>
)

const LinkInside = ({ render, path, onClick = () => {}, style = {} }) => (
    <button className={styles.button} {...{ style, onClick }}>
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

const Menu = ({ onClick }) => {
    const style = {
        fontSize: "3.25rem",
        margin: "1rem",
        fontFamily: "Montserrat",
        textAlign: "center",
    }

    const descStyle = { fontSize: "1.25rem" }

    const links = [
        { url: "https://github.com/mithi", label: "GitHub", icon: <GoOctoface /> },
        { url: "https://ko-fi.com/minimithi/", label: "KoFi", icon: <BiCoffeeTogo /> },
        { url: "https://medium.com/@mithi", label: "Medium", icon: <FaMedium /> },
        {
            url: "https://instagram.com/minimithi/",
            label: "Instagram",
            icon: <FaInstagram />,
        },
    ]

    const linksInside = [
        { path: "/", label: "Home", icon: <HiHome /> },
        { path: "/all", label: "Notes", icon: <FaRegStickyNote /> },
        { path: "/tags", label: "Tags", icon: <ImPriceTags /> },
    ]
    return (
        <div className={styles.menu}>
            {links.map(link => (
                <LinkAway
                    key={link.url + link.label}
                    url={link.url}
                    render={
                        <>
                            {link.icon}
                            <div style={descStyle}>{link.label}</div>
                        </>
                    }
                    {...{ style }}
                />
            ))}

            {linksInside.map(link => (
                <LinkInside
                    key={link.path + link.label}
                    path={link.path}
                    onClick={onClick}
                    render={
                        <>
                            {link.icon}
                            <div style={descStyle}>{link.label}</div>
                        </>
                    }
                    {...{ style }}
                />
            ))}
        </div>
    )
}

const Layout = ({ children }) => {
    const { bgColor, textColor } = useContext(ThemeContext)
    const [showMenu, setShowMenu] = useState(false)
    const toggleShowMenu = () => setShowMenu(!showMenu)

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
                <button className={styles.button} onClick={toggleShowMenu}>
                    <GiHamburgerMenu />
                </button>
                <ThemeButton />
            </header>

            <main className={styles.main}>
                {showMenu ? <Menu onClick={toggleShowMenu} /> : children}
            </main>

            <footer className={styles.footer}>
                <LinkAway url="https://github.com/mithi" render={<GoOctoface />} />
                <LinkAway url="https://ko-fi.com/minimithi/" render={<BiCoffeeTogo />} />
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
