import Artwork from "../artwork/Artwork";
import './SectionRow.scss'

const SectionRow = () => {
    return (
        <div className="section-row">
            <Artwork />
            <Artwork />
            <Artwork />
            <Artwork />
        </div>
    )
}

export default SectionRow;