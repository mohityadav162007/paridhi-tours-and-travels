import { Link } from "react-router-dom";
import { CONTACT } from "../config/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left: Business Info */}
        <div className="footer-col">
          <h3>Maa Narmada Tour & Travels</h3>
          <p>
            Trusted car rental & domestic tour services.
            Comfortable vehicles, professional drivers, reliable service.
          </p>

          <div className="footer-contact">
            <a href={`tel:${CONTACT.phone}`}>📞 {CONTACT.phone}</a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Car Gallery</Link></li>
            <li><Link to="/domestic-trips">Domestic Trips</Link></li>
          </ul>
        </div>

        {/* Right: Map */}
        <div className="footer-col">
          <h4>Our Location</h4>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238957.5087251592!2d75.928129!3d22.691469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e33d8993ccf5%3A0x30fd75702380e373!2sMaa%20Narmada%20tours%20and%20Travels!5e1!3m2!1sen!2sin!4v1765743700044!5m2!1sen!2sin"
  width="100%"
  height="220"
  style={{ border: 0, borderRadius: 12 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Maa Narmada Tour & Travels Location"
/>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Maa Narmada Tour & Travels. All rights reserved.
      </div>
    </footer>
  );
}
