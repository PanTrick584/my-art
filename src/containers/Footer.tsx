import { MediaLinks } from '../components/MediaLinks';
import './styles/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <p className="item-header">contact</p>
                        <MediaLinks />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;