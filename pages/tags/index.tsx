import { getAllTags } from "../../utils/utils"
import { Tags } from "../../components/NotePreview"
import { FlowerPot } from "../../components/Layout/index"

const Home = () => (
    <div style={{ textAlign: "center" }}>
        <FlowerPot />
        <Tags tags={getAllTags()} highlightTag={null} id="all-tags" />
    </div>
)

export default Home
