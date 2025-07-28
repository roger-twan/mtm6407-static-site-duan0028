import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Creative Digital Designer & Developer
              </h1>
              <p className="lead mb-4">
                Transforming ideas into stunning digital experiences through innovative design and cutting-edge development.
              </p>
              <div className="d-flex gap-3">
                <Link href="/portfolio" className="btn btn-light btn-lg">
                  View My Work
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-placeholder bg-light bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '300px', height: '300px'}}>
                <img className="rounded-circle" src="/avatar.jpg" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <p className="lead mb-4">
                I'm a passionate digital designer and developer with years of experience creating 
                compelling web experiences, mobile applications, and interactive digital solutions.
              </p>
              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="bi bi-palette display-4 text-primary mb-3"></i>
                      <h5 className="card-title">UI/UX Design</h5>
                      <p className="card-text">
                        Creating intuitive and beautiful user interfaces that enhance user experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="bi bi-code-slash display-4 text-primary mb-3"></i>
                      <h5 className="card-title">Web Development</h5>
                      <p className="card-text">
                        Building responsive, modern websites using the latest technologies and frameworks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="bi bi-phone display-4 text-primary mb-3"></i>
                      <h5 className="card-title">Mobile Apps</h5>
                      <p className="card-text">
                        Developing cross-platform mobile applications for iOS and Android.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-5">Technical Skills</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <h5 className="mb-3">Design Tools</h5>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary p-2">Figma</span>
                    <span className="badge bg-primary p-2">Adobe Creative Suite</span>
                    <span className="badge bg-primary p-2">Sketch</span>
                    <span className="badge bg-primary p-2">InVision</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3">Development</h5>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-success p-2">React</span>
                    <span className="badge bg-success p-2">Next.js</span>
                    <span className="badge bg-success p-2">TypeScript</span>
                    <span className="badge bg-success p-2">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
              <p className="lead mb-4">
                Let's collaborate to bring your vision to life with innovative design and development solutions.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
