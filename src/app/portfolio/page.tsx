export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and secure payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Cross-platform mobile banking application with biometric authentication, real-time notifications, and secure transaction processing.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://play.google.com/store/apps/details?id=com.bankingapp",
      githubUrl: "https://github.com/username/banking-app",
      featured: true
    },
    {
      id: 3,
      title: "Design System & Component Library",
      category: "UI/UX Design",
      description: "Comprehensive design system with reusable components, documentation, and implementation guidelines for consistent brand experience.",
      technologies: ["Figma", "Storybook", "React", "Styled Components"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://design-system.example.com",
      githubUrl: "https://github.com/username/design-system",
      featured: true
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "Web Development",
      description: "Complete restaurant management solution with order tracking, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://restaurant-demo.example.com",
      githubUrl: "https://github.com/username/restaurant-system",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Design",
      description: "Modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      technologies: ["Next.js", "Bootstrap", "Framer Motion", "Vercel"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/username/portfolio",
      featured: false
    },
    {
      id: 6,
      title: "Task Management App",
      category: "Mobile Development",
      description: "Productive task management application with team collaboration, project tracking, and deadline reminders.",
      technologies: ["Flutter", "Firebase", "Provider", "Dart"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://apps.apple.com/app/taskmanager",
      githubUrl: "https://github.com/username/task-app",
      featured: false
    },
    {
      id: 7,
      title: "Weather Dashboard",
      category: "Web Development",
      description: "Real-time weather dashboard with interactive maps, detailed forecasts, and location-based recommendations.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://weather-dashboard.example.com",
      githubUrl: "https://github.com/username/weather-app",
      featured: false
    },
    {
      id: 8,
      title: "Brand Identity Package",
      category: "Graphic Design",
      description: "Complete brand identity including logo design, color palette, typography, and marketing materials.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Brand Guidelines"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://brand-guidelines.example.com",
      githubUrl: null,
      featured: false
    },
    {
      id: 9,
      title: "Social Media Dashboard",
      category: "Web Development",
      description: "Comprehensive social media management platform with analytics, scheduling, and content creation tools.",
      technologies: ["React", "Express.js", "MongoDB", "Social APIs"],
      image: "/api/placeholder/400/300",
      liveUrl: "https://social-dashboard.example.com",
      githubUrl: "https://github.com/username/social-dashboard",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Graphic Design"];

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">My Portfolio</h1>
              <p className="lead mb-0">
                A collection of my best work showcasing expertise in web development, 
                mobile applications, and creative design solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Portfolio Overview</h2>
              <p className="lead">
                I specialize in creating innovative digital solutions across multiple platforms. 
                My work spans from responsive web applications to mobile apps, 
                with a focus on user experience and modern design principles.
              </p>
            </div>
          </div>

          {/* Category Stats */}
          <div className="row g-4 mb-5">
            <div className="col-md-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="text-primary fw-bold">9</h3>
                  <p className="text-muted mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="text-success fw-bold">5</h3>
                  <p className="text-muted mb-0">Web Applications</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="text-info fw-bold">2</h3>
                  <p className="text-muted mb-0">Mobile Apps</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="text-warning fw-bold">2</h3>
                  <p className="text-muted mb-0">Design Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Featured Projects</h2>
              <p className="lead">My most impactful and innovative work</p>
            </div>
          </div>
          
          <div className="row g-4">
            {portfolioItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{height: '250px'}}>
                    <i className="bi bi-image display-1 text-muted"></i>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title mb-0">{item.title}</h5>
                      <span className="badge bg-primary">{item.category}</span>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <div className="mb-3">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      {item.liveUrl && (
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                          <i className="bi bi-link-45deg me-1"></i>Live Demo
                        </a>
                      )}
                      {item.githubUrl && (
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">
                          <i className="bi bi-github me-1"></i>Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">All Projects</h2>
              <p className="lead">Complete collection of my work</p>
            </div>
          </div>
          
          <div className="row g-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                    <i className="bi bi-image display-4 text-muted"></i>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h6 className="card-title mb-0">{item.title}</h6>
                      <span className="badge bg-primary small">{item.category}</span>
                    </div>
                    <p className="card-text small">{item.description}</p>
                    <div className="mb-3">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="badge bg-secondary small me-1">{tech}</span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="badge bg-secondary small">+{item.technologies.length - 3} more</span>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      {item.liveUrl && (
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                          <i className="bi bi-link-45deg me-1"></i>Demo
                        </a>
                      )}
                      {item.githubUrl && (
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">
                          <i className="bi bi-github me-1"></i>Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
