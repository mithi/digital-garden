import { useState, useContext } from "react"
import { ThemeContext } from "../../../components/Theme/index"
import styles from "./Note.module.css"

const Demonstration = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const isLight = theme === "light"

    return (
        <button
            type="button"
            className={isLight ? styles.isLight : styles.isDark}
            onClick={toggleTheme}
        >
            {isLight ? "🌙 Tap for 🌙 mode 🌙" : "🌼 Tap for 🌼 mode 🌼"}
        </button>
    )
}

export default Demonstration
