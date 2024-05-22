import './styles/artwork-image.scss';

type Image = {
    image: string[];
    type: string;
}

export const ArtworkImage = ({image, type}: Image) => {
    return (
        <div className="artwork-image">
            <img src={`assets/${type}s/${image[0]}`} alt="" className="artwork-image-item" />
        </div>
    )
}