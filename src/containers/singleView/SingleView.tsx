import './styles/single-view.scss'
import { useContextProvider } from '../../context/context';
import Artwork from '../artwork/Artwork';
import { useEffect, useState } from 'react';

const SingleView = () => {
    const { singleViewVisible } = useContextProvider();
    const { singleViewSrc } = useContextProvider();
    const { handleSingleView } = useContextProvider();
    const [hidePopup, setHidePopup] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidePopup(true)
            handleSingleView( false )
        }, 500);
    }, [hidePopup])

    return (
        singleViewVisible && 
            <div className={`single-view
                            ${hidePopup ? '' : 'single-view-hide'}
                                 `
                                 }>
                <div className="single-view-container">
                    <Artwork itemData={singleViewSrc}/>
                    <button 
                        className='single-view-close'
                        onClick={() => setHidePopup(false)}
                    >
                        <div className='close close-one'></div>
                        <div className='close close-two'></div>
                    </button>
                </div>
            </div>
    )
}

export default SingleView;