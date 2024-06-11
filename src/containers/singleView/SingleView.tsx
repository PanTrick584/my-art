import './styles/single-view.scss'
import { useContextProvider } from '../../context/context';
import Artwork from '../artwork/Artwork';

const SingleView = () => {
    const isVisible = useContextProvider().singleViewVisible;
    const artworkSrc = useContextProvider().singleViewSrc;
console.log(isVisible);
console.log(artworkSrc);

    return (
        <div className="single-view">
            single view
            {/* <ArtworkImage image={images} type={type} />
            <div className="artwork-info">
                <ArtworkTitle title={title} />
                <ArtworkData type={type} date={date} point={point}/>
            </div> */}
        </div>
    )
}

export default SingleView;