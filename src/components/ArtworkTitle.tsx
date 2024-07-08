import { Text } from '../types/types';
import './styles/artwork-title.scss';

interface ArtTitle {
    title?: Text
}

export const ArtworkTitle: React.FC<ArtTitle> = ({title}) => {

    const lang = ''
    return (
        <div className="artwork-title">
            {lang ? title?.pl : title?.default}
        </div>
    )
}