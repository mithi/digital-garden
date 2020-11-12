import { useState } from "react"
import styles from "./Note.module.css"

const Demonstration = () => {
    const [tapped, setTapped] = useState(false)

    return (
        <button
            type="button"
            className={tapped ? styles.tappedStyle : styles.normalStyle}
            onClick={() => setTapped(!tapped)}
        >
            {tapped ? "I am tapped! ❤️❤️" : "🤜 Tap this React Component 🤛"}
        </button>
    )
}

export default Demonstration
