import { getAllNotesData } from "../../utils/utils"
import NotePreview from "../../components/NotePreview"

export async function getStaticProps() {
    return { props: { notes: getAllNotesData() } }
}

const Home = ({ notes }) => (
    <>
        {notes.map(note => (
            <NotePreview {...{ note, highlightTag: null }} key={note.id} />
        ))}
    </>
)

export default Home
