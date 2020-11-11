import { getAllTags } from "../../utils/utils"
import { Tags } from "../../components/NotePreview"

const Home = () => <Tags tags={getAllTags()} highlightTag={null} id="all-tags" />

export default Home
