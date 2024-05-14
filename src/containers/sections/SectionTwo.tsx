import Artwork from "../artwork/Artwork";
import './section-grid.scss';
import './section-two.scss';

const SectionTwo = () => {
    return (
        <div className="section-grid section-two">
            <Artwork imageSrc={'/assets/paintings/painting-wide-1-2018.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-wide-2-2019.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-square-2-2018.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-square-2-2018.jpg'} />
        </div>
    )
}

export default SectionTwo;