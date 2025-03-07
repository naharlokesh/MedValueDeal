import React from 'react';
import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-body">
      <footer className="footer">
        <div id="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-ul">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/partner-with-us">Partner with MedValueDeal</Link></li>
                <li><Link to="/sell-with-us">Sell at MedValueDeal</Link></li>
              </ul>
              <h4>Our Services</h4>
              <ul className="footer-ul">
                <li><Link to="/order-medicine">Order Medicine</Link></li>
                <li><Link to="/healthcare-products">Healthcare Products</Link></li>
                <li><Link to="/lab-tests">Lab Tests</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Featured Categories</h4>
              <ul className="footer-ul">
                <li><Link to="/covid-essentials">Covid Essentials</Link></li>
                <li><Link to="/devices">Devices</Link></li>
                <li><Link to="/nutrition-fitness">Nutrition & Fitness Supplements</Link></li>
                <li><Link to="/personal-care">Personal Care</Link></li>
                <li><Link to="/ayurvedic-care">Ayurvedic Care</Link></li>
                <li><Link to="/baby-mom-care">Baby & Mom Care</Link></li>
                <li><Link to="/skin-care">Skin Care</Link></li>
                <li><Link to="/diabetic-care">Diabetic Care</Link></li>
                <li><Link to="/sexual-wellness">Sexual Wellness</Link></li>
                <li><Link to="/short-term-ailments">Short Term Ailments</Link></li>
                <li><Link to="/lifestyle-ailments">Lifestyle Ailments</Link></li>
                <li><Link to="/home-care">Home Care</Link></li>
                <li><Link to="/women-care">Women Care</Link></li>
                <li><Link to="/health-food-drinks">Health Food and Drinks</Link></li>
                <li><Link to="/ortho-care">Ortho Care</Link></li>
                <li><Link to="/pet-care">Pet Care</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Need Help</h4>
              <ul className="footer-ul">
                <li><Link to="/browse-medicines">Browse All Medicines</Link></li>
                <li><Link to="/browse-molecules">Browse All Molecules</Link></li>
                <li><Link to="/browse-cities">Browse All Cities & Areas</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
              <h4>Policy info</h4>
              <ul className="footer-ul">
                <li><Link to="/editorial-policy">Editorial Policy</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/vulnerability-disclosure">Vulnerability Disclosure Policy</Link></li>
                <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
                <li><Link to="/customer-support">Customer Support Policy</Link></li>
                <li><Link to="/return-policy">Return Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 id="afollow">FOLLOW US</h4>
              <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://x.com/?lang=en&mx=2" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="last">
            <div id="payment-section">
              <h4>Our Payment Partners</h4>
              <div id="smallimage">
                <img src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" alt="Payment Partner 1"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg" alt="Payment Partner 2"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg" alt="Payment Partner 3"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" alt="Payment Partner 4"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg" alt="Payment Partner 5"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg" alt="Payment Partner 6"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg" alt="Payment Partner 7"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" alt="Payment Partner 8"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" alt="Payment Partner 9"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" alt="Payment Partner 10"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" alt="Payment Partner 11"/>
                <img src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" alt="Payment Partner 12"/>
              </div>
            </div>
            <div>
              <p id="footer-p">© 2023 MedValueDeal. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
