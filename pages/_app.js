import Layout from "../components/Layout"
import "../styles/globals.css"

const app = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default app
