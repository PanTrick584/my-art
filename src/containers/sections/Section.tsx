import Artwork from "../artwork/Artwork";
import { ArtworksType } from "../../types/types";
import './styles/section-grid.scss';
import './styles/section-a.scss';
import './styles/section-b.scss';
import './styles/section-c.scss';

interface SectionProps {
    artworks: ArtworksType;
    version: string;
}

const Section:  React.FC<SectionProps> = ({ artworks, version }) => {
    return (
        <div className={`section-grid section-${version}`}>
            {artworks.map((artItem, artId) => {
                return <Artwork 
                            key={artId}
                            itemData={artItem} />
            })}
        </div>
    )
}

export default Section;