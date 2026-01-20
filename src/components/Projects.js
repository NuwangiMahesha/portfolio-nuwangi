import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    'room_reservation_system': 0,
    'Juicy-Hub-E-Commerce-Platform': 0,
    'Web-Application-test_nuwangi': 0
  });

  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/NuwangiMahesha/repos?sort=updated&per_page=100');
      const data = await response.json();
      const featured = ['room_reservation_system', 'Juicy-Hub-E-Commerce-Platform', 'Web-Application-test_nuwangi'];
      const otherRepos = data.filter(repo => !featured.includes(repo.name));
      setAllRepos(otherRepos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching repos:', error);
      setLoading(false);
    }
  };

  const projectsData = {
    'room_reservation_system': {
      images: [
        '/screenshots/Screenshot 2026-01-20 175539.png',
        '/screenshots/Screenshot 2026-01-20 175657.png',
        '/screenshots/Screenshot 2026-01-20 175727.png',
        '/screenshots/Screenshot 2026-01-20 175754.png',
        '/screenshots/Screenshot 2026-01-20 175936.png',
        '/screenshots/Screenshot 2026-01-20 180007.png',
        '/screenshots/Screenshot 2026-01-20 180026.png',
        '/screenshots/Screenshot 2026-01-20 180408.png',
        '/screenshots/Screenshot 2026-01-20 180454.png'
      ],
      video: '/screenshots/Recording 2026-01-20 180150.mp4'
    },
    'Juicy-Hub-E-Commerce-Platform': {
      images: [],
      video: null
    },
    'Web-Application-test_nuwangi': {
      images: [
        '/screenshots/welcome_to_company.png',
        '/screenshots/latest_news.png',
        '/screenshots/contact_us.png'
      ],
      video: '/screenshots/landing_page_video.mp4'
    }
  };

  const featuredProjects = [
    {
      id: 'room_reservation_system',
      title: 'Room Reservation System',
      description: 'A comprehensive room booking and reservation management system with real-time availability tracking and seamless user experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/NuwangiMahesha/room_reservation_system'
    },
    {
      id: 'Juicy-Hub-E-Commerce-Platform',
      title: 'Juicy Hub - E-Commerce Platform',
      description: 'Full-featured e-commerce platform for juice and beverage products with payment integration and inventory management.',
      tech: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
      link: 'https://github.com/NuwangiMahesha/Juicy-Hub-E-Commerce-Platform'
    },
    {
      id: 'Web-Application-test_nuwangi',
      title: 'Web Application Test',
      description: 'Advanced web application with comprehensive testing suite and quality assurance features for enterprise-level reliability.',
      tech: ['React', 'Jest', 'Testing Library', 'Webpack'],
      link: 'https://github.com/NuwangiMahesha/Web-Application-test_nuwangi'
    }
  ];

  const nextImage = (projectId) => {
    const images = projectsData[projectId]?.images || [];
    if (images.length > 0) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: (prev[projectId] + 1) % images.length
      }));
    }
  };

  const prevImage = (projectId) => {
    const images = projectsData[projectId]?.images || [];
    if (images.length > 0) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: prev[projectId] === 0 ? images.length - 1 : prev[projectId] - 1
      }));
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work and expertise</p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => {
            const projectMedia = projectsData[project.id];
            const images = projectMedia?.images || [];
            const currentImage = images[currentImageIndex[project.id]] || null;
            const videoUrl = projectMedia?.video;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`featured-project ${isEven ? 'left' : 'right'}`}>
                <div className="project-content">
                  <div className="project-number">0{index + 1}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
                    View Project <span>→</span>
                  </a>
                </div>

                <div className="project-media">
                  <div className="media-wrapper">
                    {currentImage ? (
                      <div className="image-container">
                        <img src={currentImage} alt={project.title} className="project-image" />
                        {images.length > 1 && (
                          <>
                            <button className="nav-button prev" onClick={() => prevImage(project.id)}>❮</button>
                            <button className="nav-button next" onClick={() => nextImage(project.id)}>❯</button>
                            <div className="image-counter">{currentImageIndex[project.id] + 1} / {images.length}</div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <span>No images available</span>
                      </div>
                    )}

                    {videoUrl && (
                      <div className="video-container">
                        <video width="100%" height="auto" autoPlay muted loop>
                          <source src={videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!loading && allRepos.length > 0 && (
          <div className="other-repos">
            <h3>Other Repositories</h3>
            <div className="repos-list">
              {allRepos.map((repo) => (
                <div key={repo.id} className="repo-item">
                  <h4>{repo.name}</h4>
                  <p>{repo.description || 'No description available'}</p>
                  <div className="repo-tech">
                    {repo.language && <span className="repo-tech-tag">{repo.language}</span>}
                    <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                    View Repository
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="loading-message">Loading repositories...</div>
        )}
      </div>
    </section>
  );
}

export default Projects;
