import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className="nav-image">
                <img src="/assets/paintings/painting-wide-3-2020.jpg" alt="" />
            </div>
            <div className="nav-container">
                <ul className='nav-list'>
                    <li className="nav-list-item">rysunek</li>
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