import { ArtworkImage } from "../../components/ArtworkImage";
import './Artwork.scss';

const Artwork = () => {
    return (
        <div className="artwork">
            <ArtworkImage image={'/assets/drawings/pic-1.jpg'}/>
        </div>
    )
}

export default Artwork;