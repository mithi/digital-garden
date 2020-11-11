import { getAllNotesData } from "../../utils/utils"
import NotePreview from "../../components/NotePreview"

const Home = ({ notes, id }) => (
    <>
        <h1>Displaying notes with tag: {id}</h1>
        {notes.map(note => (
            <NotePreview {...{ note }} key={note.id} />
        ))}
    </>
)

/*
Return a list of possible value for id
Returns an array that looks like this:
paths = [
    { params: { id: 'hello' } },
    { params: { id: 'world' } }
]
*/
export async function getStaticPaths() {
    const allNotes = getAllNotesData()
    const allTagsDuplicated = allNotes.map(note => note.meta.tags).flat()
    const tags = Array.from(new Set(allTagsDuplicated))
    console.log("tags:", tags)
    return {
        paths: tags.map(tag => ({ params: { id: tag } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const filteredNotes = getAllNotesData().filter(note => {
        return note.meta.tags.includes(params.id)
    })
    return { props: { notes: filteredNotes, id: params.id } }
}

export default Home
