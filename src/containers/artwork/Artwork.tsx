import { ArtworkImage } from "../../components/ArtworkImage";
import './Artwork.scss';
import ArtworkInfo from "./ArtworkInfo";

type ImageSrc = {
    imageSrc: string
}

const Artwork = ({imageSrc}: ImageSrc) => {
    return (
        <div className="artwork">
            <ArtworkImage image={imageSrc}/>
            <ArtworkInfo />
        </div>
    )
}

export default Artwork;