import { Tags } from "../NotePreview"
import Link from "next/link"

const NoteHeading = ({ meta }) => (
    <>
        <Tags {...{ tags: meta.tags, id: meta.title, highlightTag: null }} />
        <Link href="">
            <a>
                <h1>🌷{meta.title}</h1>
            </a>
        </Link>
        <blockquote>{meta.description}</blockquote>
    </>
)

const NoteFooter = ({ meta }) => (
    <>
        <div style={{ margin: "30px", textAlign: "center" }}>
            <Link href="">
                <a>Back to the top</a>
            </Link>
        </div>
        <Tags {...{ tags: meta.tags, id: meta.title, highlightTag: null }} />
    </>
)

const Note = ({ children, meta }) => (
    <article>
        <NoteHeading {...{ meta }} />
        {children}
        <NoteFooter {...{ meta }} />
    </article>
)

export default Note
