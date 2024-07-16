import './styles/navigation.scss';
import { useContextProvider } from '../context/context';
import { useEffect, useState } from 'react';
import { MediaLinks } from '../components/MediaLinks';

const Navigation = () => {
    const setRouting = useContextProvider().handleRouting;
    const [checkInfo, setCheckInfo] = useState<boolean>(false);
    const [isContact, setIsContact] = useState<boolean>(false);

    useEffect(() => {
        !isContact ? 
        setIsContact(prev => !prev) :
        setTimeout(() =>  setIsContact(prev => !prev), 400) 
       
    }, [checkInfo])

    return (
        <nav className='navigation'>
            <div className="nav-container">
                <div className="nav-text">
                    patryk.chodacki.art.
                </div>
                <div className="nav-menu">
                    <ul className='nav-list'>
                        <li className="nav-list-item" onClick={()=> setRouting('main')}>home</li>
                        <li className="nav-list-item" onClick={()=> setRouting('drawings')}>drawing</li>
                        <li className="nav-list-item" onClick={()=> setRouting('paintings')}>paintings</li>
                        <li className="nav-list-item" onClick={()=> setRouting('photos')}>photo</li>
                        <li className="nav-list-item contact" onClick={()=> setCheckInfo(prev => !prev)}>contact</li>
                    </ul>
                    {isContact &&
                        <div className={`contact-container ${!checkInfo ? 'move-container' : ''}`}>
                            <MediaLinks />
                        </div>
                    }
                </div>
                {/* <div className="nav-filters">
                    <ul className="years-list">
                        <li className="years-list-item"></li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Navigation;