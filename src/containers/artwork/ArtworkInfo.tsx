import { ArtworkTitle } from '../../components/ArtworkTitle';
import { ArtworkData } from '../../components/ArtworkData';
import './ArtworkInfo.scss';

const ArtworkInfo = () => {
    return (
        <div className="artwork-info">
            <ArtworkTitle />
            <ArtworkData />
        </div>
    )
}

export default ArtworkInfo;