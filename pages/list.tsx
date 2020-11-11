import { getAllNotesData } from "../utils/utils"
import NotePreview from "../components/NotePreview"

export async function getStaticProps() {
    return { props: { allNotesData: getAllNotesData() } }
}

const Home = ({ allNotesData }) => (
    <>
        {allNotesData.map(note => (
            <NotePreview {...{ note }} key={note.id} />
        ))}
    </>
)

export default Home
