import { Text } from '../types/types';
import './styles/artwork-data.scss';

type ArtData = {
    date: string;
    type: string;
    point?: Text;
}

export const ArtworkData: React.FC<ArtData> = ({date, type, point}) => {
    const lang = '';
    
    return (
        <div className="artwork-data">
            <p className="artwork-data-type">{type}</p>
            <p className="artwork-data-year">{date}</p>
            <p className="artwork-data-point">{lang ? point?.pl : point?.default}</p>
        </div>
    )
}