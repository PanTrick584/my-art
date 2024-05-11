import Artwork from "../artwork/Artwork";
import './section-two.scss';

const SectionGrid = () => {
    return (
        <div className="section-grid section-two">
            <Artwork imageSrc={'/assets/paintings/painting-wide-1-2018.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-wide-2-2019.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-square-2-2018.jpg'} />
        </div>
    )
}

export default SectionGrid