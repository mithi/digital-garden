import { getAllNotesData, getAllTags } from "../../utils/utils"
import NotePreview from "../../components/NotePreview"

const Home = ({ notes, id }) => (
    <>
        {notes.map(note => (
            <NotePreview {...{ note, highlightTag: id }} key={note.id} />
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
    return {
        paths: getAllTags().map(tag => ({ params: { id: tag } })),
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
