// Portfolio data with detailed information
const portfolioData = {
    video1: {
        title: "Corporate Brand Video",
        category: "Video Editing",
        description: "A comprehensive corporate brand video showcasing company values, team dynamics, and product excellence. This project involved multiple shooting locations, interviews with key stakeholders, and seamless integration of motion graphics to reinforce brand identity. The video successfully increased brand awareness and client engagement by 40%.",
        client: "TechFlow Inc.",
        duration: "3 weeks",
        tech: "Adobe Premiere Pro, After Effects, DaVinci Resolve",
        media: {
            type: "video",
            src: "https://player.vimeo.com/video/76979871",
            thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop"
        },
        buttonText: "Watch Video"
    },
    video2: {
        title: "Product Showcase Video",
        category: "Video Editing",
        description: "High-end product showcase video featuring cinematic lighting, smooth camera movements, and compelling storytelling. The project highlighted the product's key features through creative visual metaphors and dynamic transitions. The video contributed to a 60% increase in product inquiries and sales conversions.",
        client: "InnovateGear",
        duration: "2 weeks",
        tech: "Adobe Premiere Pro, After Effects, Cinema 4D",
        media: {
            type: "video",
            src: "https://player.vimeo.com/video/147842170",
            thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop"
        },
        buttonText: "Watch Video"
    },
    motion1: {
        title: "Logo Animation Reel",
        category: "Motion Graphics",
        description: "A dynamic compilation of logo animations created for various brands across different industries. Each animation was crafted to reflect the brand's personality while maintaining visual consistency and professional appeal. The project demonstrates versatility in motion design and brand storytelling through animation.",
        client: "Multiple Brands",
        duration: "4 weeks",
        tech: "After Effects, Cinema 4D, Illustrator",
        media: {
            type: "video",
            src: "https://player.vimeo.com/video/125095515",
            thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop"
        },
        buttonText: "Watch Animation"
    },
    motion2: {
        title: "Animated Infographics",
        category: "Motion Graphics",
        description: "Data visualization project that transforms complex statistical information into engaging animated infographics. The animations help viewers understand data trends and insights through intuitive visual representations, making information more accessible and memorable.",
        client: "DataTech Solutions",
        duration: "2.5 weeks",
        tech: "After Effects, Illustrator, Excel",
        media: {
            type: "video",
            src: "https://player.vimeo.com/video/108018156",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
        },
        buttonText: "Watch Animation"
    },
    web1: {
        title: "E-commerce Website",
        category: "Web Development",
        description: "Modern, responsive e-commerce platform featuring intuitive user interface, seamless checkout process, and advanced product filtering. The website incorporates modern web technologies for optimal performance and user experience. The platform resulted in 45% increase in online sales and improved customer satisfaction ratings.",
        client: "ShopSmart Retail",
        duration: "6 weeks",
        tech: "HTML5, CSS3, JavaScript, React, Node.js",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
        },
        buttonText: "View Website"
    },
    web2: {
        title: "Portfolio Website",
        category: "Web Development",
        description: "Creative portfolio website featuring smooth animations, interactive elements, and responsive design. The site showcases the client's work through an engaging visual narrative and intuitive navigation system. The website helped the client secure 3 major project contracts within the first month of launch.",
        client: "Creative Studio",
        duration: "4 weeks",
        tech: "HTML5, CSS3, JavaScript, GSAP, Webpack",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop"
        },
        buttonText: "View Website"
    },
    graphics1: {
        title: "Brand Identity Package",
        category: "Graphics Design",
        description: "Complete brand identity design including logo creation, color palette development, typography selection, and comprehensive brand guidelines. The project involved extensive research into the client's target audience and market positioning to create a cohesive visual identity that resonates with their customers.",
        client: "StartupVenture Inc.",
        duration: "5 weeks",
        tech: "Adobe Illustrator, Photoshop, InDesign",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop"
        },
        buttonText: "View Design"
    },
    graphics2: {
        title: "Event Poster Design",
        category: "Graphics Design",
        description: "Eye-catching poster design for annual music festival featuring bold typography, vibrant colors, and dynamic composition. The design captures the energy and excitement of the event while maintaining clear hierarchy of information. The poster contributed to 25% increase in ticket sales compared to previous year.",
        client: "Music Festival Organizers",
        duration: "1 week",
        tech: "Adobe Photoshop, Illustrator",
        media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
            thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop"
        },
        buttonText: "View Design"
    }
};

// Global variables
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
let testimonialInterval;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    initializeTestimonials();
    initializeScrollAnimation();
    initializeContactForm();
    startTestimonialAutoplay();
});

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        menuBtn.className = 'fas fa-times';
        document.body.style.overflow = 'hidden';
    } else {
        menuBtn.className = 'fas fa-bars';
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileNav.classList.remove('active');
    menuBtn.className = 'fas fa-bars';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Active navigation tracking
function updateActiveNavLink() {
    const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    let activeSection = 'home';
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                activeSection = section;
                break;
            }
        }
    }
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + activeSection) {
            link.classList.add('active');
        }
    });
}

// Portfolio functionality
function initializePortfolio() {
    // Add click event listeners to all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.textContent.toLowerCase().replace(' ', '');
            const categoryMap = {
                'allwork': 'all',
                'videoediting': 'video',
                'motiongraphics': 'motion',
                'webdesign': 'web',
                'graphicsdesign': 'graphics'
            };
            filterPortfolio(categoryMap[category] || 'all');
        });
    });
}

function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Animate items out
    items.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
    });
    
    // After animation, filter and animate in
    setTimeout(() => {
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.classList.add('hidden');
            }
        });
    }, 300);
}

// Portfolio Modal functionality
function openPortfolioModal(projectId) {
    const modal = document.getElementById('portfolioModal');
    const project = portfolioData[projectId];
    
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalTech').textContent = project.tech;
    
    // Update media content
    const mediaContainer = document.getElementById('modalMedia');
    const primaryBtn = document.getElementById('modalPrimaryBtn');
    
    if (project.media.type === 'video') {
        mediaContainer.innerHTML = `
            <iframe src="${project.media.src}" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;
        primaryBtn.innerHTML = `<i class="fas fa-play"></i> ${project.buttonText}`;
        primaryBtn.onclick = () => {
            const iframe = mediaContainer.querySelector('iframe');
            const currentSrc = iframe.src;
            iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        };
    } else {
        mediaContainer.innerHTML = `
            <img src="${project.media.src}" alt="${project.title}" style="width: 100%; height: auto; display: block;">
        `;
        primaryBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> ${project.buttonText}`;
        primaryBtn.onclick = () => {
            window.open(project.media.src, '_blank');
        };
    }
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'translate(-50%, -50%) scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'translate(-50%, -50%) scale(1)';
        modalContent.style.opacity = '1';
    }, 50);
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add exit animation
    modalContent.style.transform = 'translate(-50%, -50%) scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop any playing videos
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src.replace(/[?&]autoplay=1/, '');
        }
    }, 300);
}

// Testimonials functionality
function initializeTestimonials() {
    showTestimonial(0);
}

function showTestimonial(index) {
    // Stop autoplay temporarily
    stopTestimonialAutoplay();
    
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
    
    currentTestimonial = index;
    
    // Restart autoplay
    setTimeout(startTestimonialAutoplay, 1000);
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(next);
}

function previousTestimonial() {
    const prev = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(prev);
}

function startTestimonialAutoplay() {
    stopTestimonialAutoplay();
    testimonialInterval = setInterval(() => {
        nextTestimonial();
    }, 6000);
}

function stopTestimonialAutoplay() {
    if (testimonialInterval) {
        clearInterval(testimonialInterval);
    }
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const formData = new FormData(event.target);
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Create email data
    const emailData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate sending process
    setTimeout(() => {
        // Create mailto link for automatic email sending
        const subject = encodeURIComponent(`Portfolio Contact: ${emailData.subject}`);
        const body = encodeURIComponent(
            `Name: ${emailData.name}\nEmail: ${emailData.email}\nSubject: ${emailData.subject}\n\nMessage:\n${emailData.message}\n\n---\nSent from Ezekiel Akinyelu Portfolio Website`
        );
        const mailtoLink = `mailto:ezekielakinyelu17@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form and show success popup
        event.target.reset();
        showPopup();
        
        // Reset button
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        submitBtn.disabled = false;
    }, 2000);
}

// Popup functionality
function showPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.add('active');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.remove('active');
}

// Scroll animations
function initializeScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animate stats numbers
                if (entry.target.classList.contains('stat-card')) {
                    animateStatNumber(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .stat-card, .portfolio-item, .testimonial-container, .contact-item'
    );
    
    elementsToAnimate.forEach(el => observer.observe(el));
}

function animateStatNumber(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    const targetNumber = parseInt(numberElement.textContent);
    const suffix = numberElement.textContent.replace(/[0-9]/g, '');
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 50);
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            numberElement.textContent = targetNumber + suffix;
            clearInterval(timer);
        } else {
            numberElement.textContent = currentNumber + suffix;
        }
    }, 40);
}

// Parallax effect for background
function initializeParallax() {
    const background = document.querySelector('.background');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        background.style.transform = `translateY(${rate}px)`;
    });
}

// Header scroll effect
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.borderBottom = '1px solid rgba(245, 158, 11, 0.3)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.borderBottom = '1px solid rgba(245, 158, 11, 0.2)';
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Event listeners
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

window.addEventListener('load', () => {
    updateActiveNavLink();
    initializeParallax();
    initializeHeaderScroll();
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    // Close portfolio modal
    if (e.target.classList.contains('modal-overlay')) {
        closePortfolioModal();
    }
    
    // Close popup
    if (e.target.classList.contains('popup-overlay')) {
        closePopup();
    }
    
    // Close mobile menu when clicking outside
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav && menuBtn && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        closePortfolioModal();
        closePopup();
        closeMobileMenu();
    }
    
    // Navigate testimonials with arrow keys
    if (e.key === 'ArrowLeft') {
        previousTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// Smooth reveal animations for portfolio items
function initializePortfolioAnimations() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize portfolio animations when portfolio section comes into view
const portfolioSection = document.getElementById('portfolio');
if (portfolioSection) {
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializePortfolioAnimations();
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    portfolioObserver.observe(portfolioSection);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(updateActiveNavLink, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
window.addEventListener('load', preloadImages);

console.log('Portfolio website loaded successfully! 🚀');