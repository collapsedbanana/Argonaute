import { Linkedin, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          {/* Section Contact */}
<div className="footer-section contact-section" id="contact">
    <h5>Contact</h5>
    <p><TelephoneFill /> +33 123 456 789</p>
    <p><EnvelopeFill /> email@example.com</p>
</div>

          {/* Section Liens */}
          <div className="footer-section links-section">
            <h5>Liens</h5>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/argos-analytics-fr/" target="_blank" rel="noopener noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </li>
              {/* Autres liens ici */}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2023 Argo Analytics
      </div>
    </footer>
  );
}

export default Footer;
