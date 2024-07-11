import './styles/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <p className="item-header">contack</p>
                        <span className='item-link'><a href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></span>
                        <span className='item-link'><a href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;