import React from 'react';

export default function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-flex">
                        <div className="contact-info">
                            <h1 className="brand-name">InnReserve</h1>
                            <div className="contact-btn"></div>
                        </div>
                        <div className="footer-categories">
                            <div className="footer-category">
                                <h2>Contact Us</h2>
                                <p>+27746542378 /+27729951555</p>
                                <p>info@innreserve.com</p>
                            </div>
                            <div className="footer-category">
                                <h2>Location</h2>
                                <p>80 Regent road</p>
                                <p>Maboneng</p>
                                <p>Gauteng , South Africa</p>
                            </div>
                            <div className="footer-category">
                                <h2>Subscribe</h2>
                                <form action="">
                                    <input type="email" name="email" id="email" placeholder="Email Address" />
                                    <input type="submit" value="Subscribe" className="submit-btn"/>
                                </form>
                                <p className="newsletter-info">Sign up for our newsletter to receive the latest updates and offers!</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <p className="footer-note">© 2024 <span className="brand-name">InnReserve</span>. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
