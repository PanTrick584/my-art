import './styles/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <h4 className="footer-list-header">kontakt</h4>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <span className='item-link'><a href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></span>
                        <span className='item-link'><a href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;