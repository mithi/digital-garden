import { getAllTags } from "../../utils/utils"
import Link from "next/link"

const Home = () => (
    <ul>
        {getAllTags().map(tag => (
            <Link href={`/tags/${tag}`} key={tag}>
                <a>
                    <li>{tag}</li>
                </a>
            </Link>
        ))}
    </ul>
)

export default Home
