// ========================================
    // EASY EDIT: Update your details here
    // ========================================
    const portfolioData = {
        projects: [
            {
                title: "Quiz Maker Platform",
                description: "Full-stack web application. Features: quiz create, timer, auto-submit, result analysis",
                image: "assets/images/quiz-screenshot.png", // Quiz Maker screenshot (Screenshot 2026-03-31 204927.png)
                tech: ["Next.js", "Prisma", "PostgreSQL"],
                github: "https://github.com/reetikkumar736997-ai/quiz-maker-platform",
                live: "" // Add live demo link if available
            },
            {
                title: "Online Complaint Management System",
                description: "Complaint registration & tracking system. Features: login, admin panel, real-time updates",
                image: "assets/images/project2-placeholder.jpg", // EDIT: Add your screenshot path
                tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                github: "", // Add GitHub if available
                live: "" // Add live demo link if available
            }
            // ADD MORE PROJECTS HERE: Copy object above
        ]
    };

    // DOM elements
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const projectsGrid = document.getElementById('projects-grid');
    const contactForm = document.getElementById('contact-form');
    const skillBars = document.querySelectorAll('.skill-progress');

    // ========================================
    // Mobile Navbar Toggle
    // ========================================
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ========================================
    // Navbar background on scroll
    // ========================================
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // ========================================
    // Render Projects (DYNAMIC - easy to edit data above)
    // ========================================
    function renderProjects() {
        projectsGrid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card fade-in">
                <img src="${project.image}" alt="${project.title}" class="project-img" 
                     onerror="this.src='https://via.placeholder.com/400x220/6366f1/ffffff?text=Project+Image'">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
                        ${project.live ? `<a href="${project.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ========================================
    // Animate Skill Bars
    // ========================================
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 500);
        });
    }

    // ========================================
    // Contact Form Handler (email simulation)
    // ========================================
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate send - replace with EmailJS or backend
        alert('Thank you! Your message has been sent. (Demo - add EmailJS for real sending)');
        contactForm.reset();
    });

    // ========================================
    // Intersection Observer for animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section, .project-card').forEach(el => {
        observer.observe(el);
    });

    // Init on load
    window.addEventListener('load', () => {
        renderProjects();
        // Animate skills after short delay
        setTimeout(animateSkillBars, 1000);
    });

    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
