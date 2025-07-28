export default function About() {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "Mobile Development", level: 80 },
    { name: "Python", level: 75 }
  ];

  const experience = [
    {
      year: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise web applications and mentoring junior developers."
    },
    {
      year: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      description: "Built responsive user interfaces and optimized web application performance."
    },
    {
      year: "2018 - 2020",
      title: "UI/UX Designer",
      company: "Creative Agency",
      description: "Designed user-centered digital experiences for clients across various industries."
    }
  ];

  const education = [
    {
      year: "2018",
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      description: "Specialized in Software Engineering and Human-Computer Interaction"
    },
    {
      year: "2016",
      degree: "Associate Degree in Web Design",
      school: "Community College",
      description: "Focused on modern web technologies and design principles"
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About Me</h1>
              <p className="lead mb-4">
                I&apos;m a passionate digital creator with a love for innovative technology and beautiful design. 
                My journey in the digital world has been driven by curiosity and a desire to solve real-world problems.
              </p>
              <div className="d-flex gap-3">
                <a href="/portfolio" className="btn btn-light btn-lg">
                  View My Work
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="bg-white bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '300px', height: '300px'}}>
                <img className="rounded-circle" src="/avatar.jpg" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">My Story</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <h5 className="fw-bold mb-3">The Beginning</h5>
                  <p>
                    My journey into the world of digital creation began with a simple curiosity about how websites work. 
                    What started as tinkering with HTML and CSS has evolved into a passion for creating meaningful digital experiences.
                  </p>
                  <p>
                    I believe that great design and technology should work together seamlessly to solve real problems 
                    and create value for users.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5 className="fw-bold mb-3">My Philosophy</h5>
                  <p>
                    I approach every project with a user-first mindset, ensuring that every design decision and 
                    technical implementation serves the end user&apos;s needs.
                  </p>
                  <p>
                    Collaboration and continuous learning are at the heart of my work ethic. I&apos;m always exploring 
                    new technologies and design trends to stay ahead of the curve.
                  </p>
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
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Technical Skills</h2>
              <div className="row g-4">
                {skills.map((skill, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-semibold">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="progress" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-primary" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Professional Experience</h2>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="row mb-4">
                    <div className="col-md-4">
                      <div className="text-muted fw-semibold">{exp.year}</div>
                    </div>
                    <div className="col-md-8">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{exp.title}</h5>
                          <h6 className="card-subtitle mb-2 text-primary">{exp.company}</h6>
                          <p className="card-text">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">Education</h2>
              <div className="row g-4">
                {education.map((edu, index) => (
                  <div key={index} className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="text-muted small mb-2">{edu.year}</div>
                        <h5 className="card-title fw-bold">{edu.degree}</h5>
                        <h6 className="card-subtitle mb-2 text-primary">{edu.school}</h6>
                        <p className="card-text">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-5 bg-body-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-5">Beyond the Code</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <i className="bi bi-camera display-4 text-primary mb-3"></i>
                      <h5 className="card-title">Photography</h5>
                      <p className="card-text">Capturing moments and finding beauty in everyday scenes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <i className="bi bi-book display-4 text-primary mb-3"></i>
                      <h5 className="card-title">Reading</h5>
                      <p className="card-text">Exploring new ideas through books on technology and design.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <i className="bi bi-bicycle display-4 text-primary mb-3"></i>
                      <h5 className="card-title">Cycling</h5>
                      <p className="card-text">Staying active and exploring the city on two wheels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
