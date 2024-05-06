import './ArtworkImage.scss';

type Image = {
    image: string
}

export const ArtworkImage = ({image}: Image) => {
    return (
        <div className="artwork-image">
            <img src={image} alt="" className="artwork-image-item" />
        </div>
    )
}