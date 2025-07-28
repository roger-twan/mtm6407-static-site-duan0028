import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Company/Portfolio Info */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">Longjian Duan</h5>
            <p className="text-white mb-3">
              Professional digital designer and developer creating innovative web experiences 
              and mobile applications that drive business growth.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/in/roger-twan/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                  <i className="bi bi-linkedin"></i>
                </div>
              </a>
              <a href="https://github.com/roger-twan" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center border" style={{width: '40px', height: '40px'}}>
                  <i className="bi bi-github"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none nav-link-footer">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none nav-link-footer">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-decoration-none nav-link-footer">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio" className="text-decoration-none nav-link-footer">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none nav-link-footer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-white">Web Development</span>
              </li>
              <li className="mb-2">
                <span className="text-white">Mobile Development</span>
              </li>
              <li className="mb-2">
                <span className="text-white">UI/UX Design</span>
              </li>
              <li className="mb-2">
                <span className="text-white">Consulting</span>
              </li>
              <li className="mb-2">
                <span className="text-white">Brand Identity</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope me-2 text-white"></i>
                <a href="mailto:roger.twan@gmail.com" className="text-decoration-none nav-link-footer">
                  roger.twan@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone me-2 text-white"></i>
                <a href="tel:+1234567890" className="text-decoration-none nav-link-footer">
                  +1 (613) 862-1168
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-2 text-white"></i>
                <span className="text-white">Ottawa, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6">
            <p className="text-white mb-0">
              © {currentYear} Longjian Duan. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-white mb-0">
              Built with <i className="bi bi-heart-fill text-danger"></i> using Next.js & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
