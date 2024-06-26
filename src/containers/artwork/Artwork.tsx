import { ArtworkImage } from "../../components/ArtworkImage";
import './styles/artwork.scss';
import { ArtworkItem } from "../../types/types";
import { ArtworkTitle } from "../../components/ArtworkTitle";
import { ArtworkData } from "../../components/ArtworkData";
import { useContextProvider } from '../../context/context';


interface ItemData {
    itemData: ArtworkItem
}

const Artwork = ({itemData}: ItemData) => {
    const { title, type, date, images, point} = itemData;
    const isVisible = useContextProvider().singleViewVisible;
    const artworkSrc = useContextProvider().singleViewSrc;

    return (
        <div className="artwork">
            <ArtworkImage image={images} type={type} />
            <div className="artwork-info">
                <ArtworkTitle title={title} />
                <ArtworkData type={type} date={date} point={point}/>
            </div>
        </div>
    )
}

export default Artwork;