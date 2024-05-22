import './styles/artwork-data.scss';
type ArtData = {
    date: string;
    type: string;
}

export const ArtworkData: React.FC<ArtData> = ({date, type}) => {
    return (
        <div className="artwork-data">
            <p className="artwork-data-type">{type}</p>
            <p className="artwork-data-space">|</p>
            <p className="artwork-data-year">{date}</p>
        </div>
    )
}