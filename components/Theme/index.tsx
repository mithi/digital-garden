import { useState, createContext } from "react"

const LIGHT_COLOR = "#f5f6fa"
const DARK_COLOR = "#2f3640"
type Theme = "light" | "dark"
type ThemeColor = typeof LIGHT_COLOR | typeof DARK_COLOR

type ThemeContext = {
    theme: Theme
    toggleTheme: () => void
    bgColor: ThemeColor
    textColor: ThemeColor
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light")
    const [bgColor, setBgColor] = useState<ThemeColor>(LIGHT_COLOR)
    const [textColor, setTextColor] = useState<ThemeColor>(DARK_COLOR)

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        setTextColor(theme === "light" ? DARK_COLOR : LIGHT_COLOR)
        setBgColor(theme === "light" ? LIGHT_COLOR : DARK_COLOR)
    }

    const color = theme === "light" ? "#333" : "#FFF"
    const backgroundColor = theme === "light" ? "#FFF" : "#333"

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, textColor, bgColor }}>
            {children}
        </ThemeContext.Provider>
    )
}
