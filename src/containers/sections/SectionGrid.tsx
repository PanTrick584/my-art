import Artwork from "../artwork/Artwork";
import './SectionGrid.scss';

const SectionGrid = () => {
    return (
        <div className="section-grid">
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2017.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
            <Artwork imageSrc={'/assets/drawings/drawing-tall-1-2016.jpg'} />
        </div>
    )
}

export default SectionGrid