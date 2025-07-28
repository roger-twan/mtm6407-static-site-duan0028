export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "bi-laptop",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Content Management Systems",
        "E-commerce Solutions",
        "API Integration"
      ],
      price: "$2,500 - $15,000",
      duration: "2-8 weeks"
    },
    {
      title: "Mobile Development",
      icon: "bi-phone",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Performance Monitoring"
      ],
      price: "$5,000 - $25,000",
      duration: "4-12 weeks"
    },
    {
      title: "UI/UX Design",
      icon: "bi-palette",
      description: "User-centered design solutions that enhance user experience and drive engagement.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Interactive Prototypes"
      ],
      price: "$1,500 - $8,000",
      duration: "2-6 weeks"
    },
    {
      title: "Consulting",
      icon: "bi-lightbulb",
      description: "Strategic guidance for digital projects and technology decisions.",
      features: [
        "Technology Strategy",
        "Architecture Planning",
        "Performance Audits",
        "Security Reviews",
        "Team Training",
        "Project Management"
      ],
      price: "$150/hour",
      duration: "Flexible"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, requirements, and target audience through detailed consultation."
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating comprehensive project plans, timelines, and technical specifications."
    },
    {
      step: "03",
      title: "Design",
      description: "Developing wireframes, prototypes, and visual designs that align with your brand."
    },
    {
      step: "04",
      title: "Development",
      description: "Building your solution using modern technologies and best practices."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing across devices and browsers to ensure quality and performance."
    },
    {
      step: "06",
      title: "Launch",
      description: "Deploying your project and providing ongoing support and maintenance."
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">My Services</h1>
              <p className="lead mb-0">
                Comprehensive digital solutions tailored to your specific needs and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">What I Offer</h2>
              <p className="lead">
                From concept to launch, I provide end-to-end digital solutions that help businesses 
                grow and succeed in the digital landscape.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <h4 className="card-title mb-0">{service.title}</h4>
                    </div>
                    <p className="card-text mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">What&apos;s Included:</h6>
                      <ul className="list-unstyled">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="text-primary fw-bold">{service.price}</span>
                        <div className="text-muted small">{service.duration}</div>
                      </div>
                      <a href="/contact" className="btn btn-primary">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">My Process</h2>
              <p className="lead">A proven methodology that ensures successful project delivery</p>
            </div>
          </div>
          
          <div className="row g-4">
            {process.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      <span className="fw-bold fs-4">{step.step}</span>
                    </div>
                    <h5 className="card-title">{step.title}</h5>
                    <p className="card-text">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Technologies I Work With</h2>
              <p className="lead">Modern tools and frameworks for optimal results</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Frontend</h6>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary">React</span>
                    <span className="badge bg-primary">Next.js</span>
                    <span className="badge bg-primary">Vue.js</span>
                    <span className="badge bg-primary">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Backend</h6>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-success">Node.js</span>
                    <span className="badge bg-success">Python</span>
                    <span className="badge bg-success">PHP</span>
                    <span className="badge bg-success">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Mobile</h6>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-info">React Native</span>
                    <span className="badge bg-info">Flutter</span>
                    <span className="badge bg-info">Swift</span>
                    <span className="badge bg-info">Kotlin</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Design</h6>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-warning">Figma</span>
                    <span className="badge bg-warning">Adobe XD</span>
                    <span className="badge bg-warning">Sketch</span>
                    <span className="badge bg-warning">InVision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
              <p className="lead mb-4">
                Let&apos;s discuss your needs and create something amazing together.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="/contact" className="btn btn-light btn-lg">
                  Get a Quote
                </a>
                <a href="/portfolio" className="btn btn-outline-light btn-lg">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
