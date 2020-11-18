import { getAllNotesData } from "../../utils/utils"
import NotePreview from "../../components/NotePreview"

export async function getStaticProps() {
    const notes = getAllNotesData().filter(data => data.id.match(/\/robotics\//g))
    return { props: { notes } }
}

const Home = ({ notes }) => (
    <>
        {notes.map(note => (
            <NotePreview {...{ note, highlightTag: null }} key={note.id} />
        ))}
    </>
)

export default Home
