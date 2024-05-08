import { ArtworkImage } from "../../components/ArtworkImage";
import './Artwork.scss';
import ArtworkInfo from "./ArtworkInfo";

const Artwork = () => {
    return (
        <div className="artwork">
            <ArtworkImage image={'/assets/drawings/pic-1.jpg'}/>
            <ArtworkInfo />
        </div>
    )
}

export default Artwork;