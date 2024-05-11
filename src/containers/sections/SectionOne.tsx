import Artwork from "../artwork/Artwork";
import './section-one.scss';
import './section-grid.scss';

const SectionGrid = () => {
    return (
        <div className="section-grid section-one">
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2017.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-2-2014.jpg'} />
        </div>
    )
}

export default SectionGrid