const mdxGenerator = require("@next/mdx")

const mdxOptions = {
    options: {
        rehypePlugins: [
            require("@mapbox/rehype-prism"), // Syntax highlighting
        ],
    },
}
const withMDX = mdxGenerator(mdxOptions)

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
})
