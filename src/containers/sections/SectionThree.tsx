import Artwork from "../artwork/Artwork";
import './section-grid.scss';
import './section-three.scss';

const SectionThree = () => {
    return (
        <div className="section-grid section-three">
            <Artwork imageSrc={'/assets/paintings/painting-wide-1-2018.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-wide-2-2019.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-square-2-2018.jpg'} />
            <Artwork imageSrc={'/assets/paintings/painting-square-2-2018.jpg'} />
        </div>
    )
}

export default SectionThree