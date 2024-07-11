import './styles/navigation.scss';
import { useContextProvider } from '../context/context';

const Navigation = () => {
    const setRouting = useContextProvider().handleRouting;

    return (
        <nav className='navigation'>
            <div className="nav-container">
                <div className="nav-text">
                    patryk.chodacki.art.
                </div>
                <ul className='nav-list'>
                    <li className="nav-list-item" onClick={()=> setRouting('main')}>home</li>
                    <li className="nav-list-item" onClick={()=> setRouting('drawings')}>drawing</li>
                    <li className="nav-list-item" onClick={()=> setRouting('paintings')}>paintings</li>
                    <li className="nav-list-item" onClick={()=> setRouting('photos')}>photo</li>
                    {/* <li className="nav-list-item">o mnie</li>
                    <li className="nav-list-item">kontakt</li> */}
                </ul>
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