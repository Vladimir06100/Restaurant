import '../Styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_text">
                <a href="/">HOME </a>
                <span>contact</span>
                <span>faq</span>
            </div>

            <div className="footer_social">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </footer>
    )
}

export default Footer;