import { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    'room_reservation_system': 0,
    'in10nt-influencer-market': 0,
    'Juicy-Hub-E-Commerce-Platform': 0,
    'Web-Application-test_nuwangi': 0,
    'branchworks-global': 0,
    'stately-bunny': 0
  });

  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos();
    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const preloadImages = () => {
    Object.values(projectsData).forEach(project => {
      project.images?.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
      });
    });
  };

  const publicUrl = process.env.PUBLIC_URL || '';

  const projectsData = {
    'room_reservation_system': {
      images: [
        `${publicUrl}/screenshots/Screenshot 2026-01-20 175539.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 175657.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 175727.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 175754.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 175936.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 180007.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 180026.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 180408.png`,
        `${publicUrl}/screenshots/Screenshot 2026-01-20 180454.png`
      ],
      video: `${publicUrl}/screenshots/Recording 2026-01-20 180150.mp4`
    },
    'in10nt-influencer-market': {
      images: [],
      video: null
    },
    'Juicy-Hub-E-Commerce-Platform': {
      images: [
        `${publicUrl}/screenshots/My E- commerce website_first.jpg`,
        `${publicUrl}/screenshots/My E- commerce website1.jpg`,
        `${publicUrl}/screenshots/My E- commerce website2.jpg`,
        `${publicUrl}/screenshots/My E- commerce website3.jpg`,
        `${publicUrl}/screenshots/My E- commerce website4.jpg`,
        `${publicUrl}/screenshots/My E- commerce website5.jpg`,
        `${publicUrl}/screenshots/My E- commerce website6.jpg`,
        `${publicUrl}/screenshots/My E- commerce website8.jpg`,
        `${publicUrl}/screenshots/My E- commerce website9.jpg`,
        `${publicUrl}/screenshots/My E- commerce website10.jpg`,
        `${publicUrl}/screenshots/My E- commerce website11.jpg`,
        `${publicUrl}/screenshots/My E- commerce website12.jpg`,
        `${publicUrl}/screenshots/My E- commerce websitenew.jpg`
      ],
      video: null
    },
    'branchworks-global': {
      images: [],
      video: null,
      embedUrl: 'https://www.branchworksglobal.com/'
    },
    'stately-bunny': {
      images: [],
      video: null,
      embedUrl: 'https://69fab7c0fdff7563cccecc7d--stately-bunny-b2c4aa.netlify.app/'
    },
    'Web-Application-test_nuwangi': {
      images: [
        `${publicUrl}/screenshots/welcome_to_company.png`,
        `${publicUrl}/screenshots/latest_news.png`,
        `${publicUrl}/screenshots/contact_us.png`
      ],
      video: `${publicUrl}/screenshots/landing_page_video.mp4`
    }
  };

  const featuredProjects = [
    {
      id: 'room_reservation_system',
      title: 'Room Reservation System',
      description: 'A comprehensive room booking and reservation management system with real-time availability tracking and seamless user experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/NuwangiMahesha/room_reservation_system',
      liveUrl: 'https://in10nt.github.io/room_reservation_system-master/frontend/welcome.html',
      isLive: true
    },
    {
      id: 'in10nt-influencer-market',
      title: 'In10nt Influencer Market Platform',
      description: 'Innovative influencer marketplace platform connecting brands with content creators, featuring real-time analytics and campaign management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Analytics'],
      link: 'https://master.dj1fvbbqhyw0c.amplifyapp.com/',
      liveUrl: 'https://master.dj1fvbbqhyw0c.amplifyapp.com/',
      isLive: true
    },
    {
      id: 'Juicy-Hub-E-Commerce-Platform',
      title: 'Juicy Hub - E-Commerce Platform',
      description: 'Full-featured e-commerce platform for juice and beverage products with payment integration and inventory management.',
      tech: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
      link: 'https://github.com/NuwangiMahesha/Juicy-Hub-E-Commerce-Platform'
    },
    {
      id: 'branchworks-global',
      title: 'BranchWorks Global',
      description: 'Professional corporate website showcasing global business solutions with modern design and seamless user experience.',
      tech: ['React', 'Tailwind CSS', 'AWS', 'Responsive Design'],
      link: 'https://www.branchworksglobal.com/',
      liveUrl: 'https://www.branchworksglobal.com/',
      isLive: true
    },
    {
      id: 'stately-bunny',
      title: 'Kyrose Global Church Website',
      description: 'Modern church website featuring event management, sermon archives, and community engagement tools with responsive design.',
      tech: ['React', 'CSS3', 'Netlify', 'Responsive Design'],
      link: 'https://github.com/In10nt/kyrose-global-church',
      liveUrl: 'https://69fab7c0fdff7563cccecc7d--stately-bunny-b2c4aa.netlify.app/',
      isLive: true
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
      const nextIndex = (currentImageIndex[projectId] + 1) % images.length;
      // Preload next image
      const nextImg = new Image();
      nextImg.src = images[nextIndex];
      
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: nextIndex
      }));
    }
  };

  const prevImage = (projectId) => {
    const images = projectsData[projectId]?.images || [];
    if (images.length > 0) {
      const prevIndex = currentImageIndex[projectId] === 0 ? images.length - 1 : currentImageIndex[projectId] - 1;
      // Preload previous image
      const prevImg = new Image();
      prevImg.src = images[prevIndex];
      
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: prevIndex
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
                  <div className="project-links">
                    {project.isLive && project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-cta live">
                        <span className="live-indicator">●</span> View Live <span>→</span>
                      </a>
                    )}
                    {!project.isLive && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
                        View Code <span>→</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-media">
                  <div className="media-wrapper">
                    {currentImage ? (
                      <div className="image-container">
                        <img 
                          src={currentImage} 
                          alt={project.title} 
                          className="project-image"
                          loading="eager"
                        />
                        {images.length > 1 && (
                          <>
                            <button 
                              className="nav-button prev" 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                prevImage(project.id);
                              }}
                              type="button"
                              aria-label="Previous image"
                            >
                              ❮
                            </button>
                            <button 
                              className="nav-button next" 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                nextImage(project.id);
                              }}
                              type="button"
                              aria-label="Next image"
                            >
                              ❯
                            </button>
                            <div className="image-counter">{currentImageIndex[project.id] + 1} / {images.length}</div>
                          </>
                        )}
                      </div>
                    ) : projectMedia?.embedUrl ? (
                      <div className="live-preview-container">
                        <div className="live-badge">
                          <span className="live-dot">●</span> Live Preview
                        </div>
                        <iframe 
                          src={projectMedia.embedUrl}
                          title={project.title}
                          className="live-preview-iframe"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms"
                        />
                      </div>
                    ) : project.isLive ? (
                      <div className="live-preview-card">
                        <div className="preview-icon">🚀</div>
                        <h4>Live Website Available</h4>
                        <p>Click "View Live" to explore this project</p>
                        <div className="preview-features">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <span key={i} className="preview-tech">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <span>No preview available</span>
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
