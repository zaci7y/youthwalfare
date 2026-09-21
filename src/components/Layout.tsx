import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { SITE } from '../data/siteData';
import logoUrl from '../assets/ynlogo.webp';

export function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="ngo-page">
      <div className="top-strip py-2">
        <div className="container">
          {/* Desktop: single row, no marquee */}
          <div className="top-strip-desktop d-none d-lg-flex flex-nowrap justify-content-between align-items-center text-lg-start">
            <span className="text-nowrap">
              <i className="bi bi-telephone-fill me-2"></i>
              {SITE.phone}
            </span>
            <span className="text-nowrap">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {SITE.address}
            </span>
            <span className="text-nowrap">
              <i className="bi bi-heart-pulse-fill me-2"></i>
              {SITE.topStripText}
            </span>
          </div>
          {/* Mobile: single line marquee */}
          <div className="top-strip-marquee-wrapper d-lg-none">
            <div className="top-strip-marquee" aria-label="Contact and info">
              <span className="top-strip-marquee-item">
                <i className="bi bi-telephone-fill me-2"></i>{SITE.phone}
              </span>
              <span className="top-strip-marquee-sep">•</span>
              <span className="top-strip-marquee-item">
                <i className="bi bi-geo-alt-fill me-2"></i>{SITE.address}
              </span>
              <span className="top-strip-marquee-sep">•</span>
              <span className="top-strip-marquee-item">
                <i className="bi bi-heart-pulse-fill me-2"></i>{SITE.topStripText}
              </span>
              <span className="top-strip-marquee-sep" aria-hidden="true">•</span>
              <span className="top-strip-marquee-item" aria-hidden="true">
                <i className="bi bi-telephone-fill me-2"></i>{SITE.phone}
              </span>
              <span className="top-strip-marquee-sep" aria-hidden="true">•</span>
              <span className="top-strip-marquee-item" aria-hidden="true">
                <i className="bi bi-geo-alt-fill me-2"></i>{SITE.address}
              </span>
              <span className="top-strip-marquee-sep" aria-hidden="true">•</span>
              <span className="top-strip-marquee-item" aria-hidden="true">
                <i className="bi bi-heart-pulse-fill me-2"></i>{SITE.topStripText}
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ngo-navbar sticky-top py-3">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-3" to="/">
            <img src={logoUrl} alt={SITE.name} className="navbar-logo" />
          </NavLink>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ngoNavbar"
            aria-controls="ngoNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ngoNavbar">
            <ul className="navbar-nav ms-auto me-lg-3 mb-3 mb-lg-0 align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=X3QXZUKS4LVQ8"
              className="btn btn-primary-ngo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer-section pt-5 pb-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img src={logoUrl} alt={SITE.name} className="footer-logo" />
                {/* <div className="brand-copy footer-brand-copy">
                  <small>{SITE.footerTagline}</small>
                  <strong>{SITE.name}</strong>
                </div> */}
              </div>
              <p className="footer-text">
                A humanitarian organization dedicated to feeding poor families, arranging medical treatment
                for children, and creating long-term welfare impact. Visit us at {SITE.domain}.
              </p>
              <div className="social-links mt-3">
                <a href={`https://${SITE.domain}`} aria-label="Website"><i className="bi bi-globe"></i></a>
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <h5>Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/activities">Activities</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3">
              <h5>Services</h5>
              <ul className="footer-links list-unstyled">
                <li><NavLink to="/services">Food Distribution Programs</NavLink></li>
                <li><NavLink to="/services">Children Medical Treatment</NavLink></li>
                <li><NavLink to="/services">Education Support</NavLink></li>
                <li><NavLink to="/services">Disaster Relief</NavLink></li>
                <li><NavLink to="/services">Community Welfare</NavLink></li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h5>Contact Information</h5>
              <ul className="footer-contact list-unstyled">
                <li><i className="bi bi-telephone-fill"></i><span>{SITE.phone}</span></li>
                <li><i className="bi bi-geo-alt-fill"></i><span>{SITE.addressShort}</span></li>
                <li><i className="bi bi-globe"></i><span>{SITE.domain}</span></li>
                <li><i className="bi bi-envelope-fill"></i><span>Support, donation, and volunteer inquiries welcome</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2 mt-4 pt-4">
            <span>© {currentYear} {SITE.name}. All rights reserved.</span>
            <span>{SITE.domain}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
