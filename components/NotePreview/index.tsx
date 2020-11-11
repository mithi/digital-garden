import Link from "next/link"
import styles from "./NotePreview.module.css"

const NoteTitle = ({ id, title }) => (
    <Link href={`/notes${id}`}>
        <a>
            <h2 className={styles.title}>🌷{title}</h2>
        </a>
    </Link>
)

type TagType = { tags: string[]; id: string; highlightTag: string | null | undefined }
const Tags = ({ tags, id, highlightTag }: TagType) => {
    const list = tags.map(tag => (
        <Link href={`/tags/${tag}`}>
            <a>
                <li
                    className={tag === highlightTag ? styles.highlightTag : styles.tag}
                    key={tag + id}
                >
                    {tag}
                </li>
            </a>
        </Link>
    ))
    return <ul className={styles.tagContainer}>{list}</ul>
}

const NotePreview = ({ note, highlightTag }) => (
    <div className={styles.previewContainer}>
        <NoteTitle {...{ id: note.id, title: note.meta.title }} />
        <p className={styles.description}>{note.meta.description}</p>
        <Tags {...{ tags: note.meta.tags, id: note.id, highlightTag }} />
    </div>
)

export default NotePreview
