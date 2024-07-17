import { ArtworkImage } from "../../components/ArtworkImage";
import { ArtworkTitle } from "../../components/ArtworkTitle";
import { ArtworkData } from "../../components/ArtworkData";
import { ArtworkItem } from "../../types/types";
import './styles/artwork.scss';

interface ItemData {
    itemData?: ArtworkItem
}

const Artwork = ({itemData}: ItemData) => {
    const { title, type = '', date = '', images = [], point} = itemData || {};

    return (
        <>
            <div className="artwork">
                <ArtworkImage 
                    image={images}
                    type={type}
                    itemData={itemData}
                    date={date}
                />
                <div className="artwork-info">
                    <ArtworkTitle title={title} />
                    <ArtworkData 
                        type={type} 
                        date={date} 
                        point={point}
                    />
                </div>
            </div>
        </>
        
    )
}

export default Artwork;