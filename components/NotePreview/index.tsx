import Link from "next/link"

const NoteTitle = ({ id, title }) => (
    <Link href={`/notes${id}`}>
        <a>
            <h1>🌱{title}🌷</h1>
        </a>
    </Link>
)

type TagType = { tags: string[]; id: string }
const Tags = ({ tags, id }: TagType) => {
    const list = tags.map(tag => <li key={tag + id}>{tag}</li>)
    return <ul>{list}</ul>
}

const NotePreview = ({ note }) => (
    <>
        <NoteTitle {...{ id: note.id, title: note.meta.title }} />
        <p>{note.meta.description}</p>
        <Tags {...{ tags: note.meta.tags, id: note.id }} />
    </>
)

export default NotePreview
