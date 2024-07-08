import './styles/single-view.scss'
import { useContextProvider } from '../../context/context';
import Artwork from '../artwork/Artwork';

const SingleView = () => {
    const { singleViewVisible } = useContextProvider();
    const { singleViewSrc } = useContextProvider();
    const handleSingleView = useContextProvider().handleSingleView;

    return (
        singleViewVisible && 
            <div className="single-view">
                <div className="single-view-container">
                    <Artwork itemData={singleViewSrc}/>
                    <button 
                        className='single-view-close'
                        onClick={() => handleSingleView( false )}
                    >
                        <div className='close close-one'></div>
                        <div className='close close-two'></div>
                    </button>
                </div>
            </div>
    )
}

export default SingleView;