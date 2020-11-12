import "../styles/reset.css"
import "../styles/prism-theme.css"
import "../styles/prism-theme-override.css"
import "../styles/globals.css"
import Layout from "../components/Layout"

const app = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default app
