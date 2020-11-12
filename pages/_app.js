import "../styles/reset.css"
import "../styles/prism-theme.css"
import "../styles/prism-theme-override.css"
import "../styles/globals.css"
import Layout from "../components/Layout"
import { ThemeProvider } from "../components/Theme/index"

const app = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default app
