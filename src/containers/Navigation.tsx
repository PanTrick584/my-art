import { MouseEventHandler } from 'react';
import { useContextProvider } from '../context/context';
import './styles/navigation.scss';

const Navigation = () => {
    const setDrawingsVisible = useContextProvider().handleDrawing();

    return (
        <nav className='navigation'>
            <div className="nav-container">
                <div className="nav-text">
                    patryk.chodacki.art
                </div>
                <ul className='nav-list'>
                    <li className="nav-list-item" onClick={(): MouseEventHandler<HTMLLIElement> | undefined  => setDrawingsVisible()}>rysunek</li>
                    <li className="nav-list-item">malarstow</li>
                    <li className="nav-list-item">fotografia</li>
                    <li className="nav-list-item">o mnie</li>
                    <li className="nav-list-item">kontakt</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;