document.addEventListener('DOMContentLoaded', () => {
    const telInputs = document.querySelectorAll('input[type=tel]');
    phoneMask(telInputs);

    modalsInit();

    const applicationForms = document.querySelectorAll('form.application-form');
    const applicationCompletedModal = document.getElementById('application-success');
    const applicationCrashedModal = document.getElementById('application-error');
    formRequest(applicationForms, '/api/application/send', applicationCompletedModal, applicationCrashedModal, ['name', 'phone']);

    const reviewForms = document.querySelectorAll('form.review-form');
    const reviewCompletedModal = document.getElementById('review-success');
    const reviewCrashedModal = document.getElementById('review-error');
    formRequest(reviewForms, '/api/review/send', reviewCompletedModal, reviewCrashedModal, ['name', 'phone', 'email', 'text', 'rate']);

    // Header animations
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');
    let lastScroll = 0;
    
    // Mobile menu toggle
    menuBtn?.addEventListener('click', () => {
        nav.classList.toggle('show');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('show') && 
            !nav.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            nav.classList.remove('show');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
            document.body.classList.remove('no-scroll');
        }
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    const handleParallax = () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const scroll = window.pageYOffset;
            element.style.transform = `translateY(${scroll * speed}px)`;
        });
    };

    // Smooth scroll for all internal links
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

    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });

    // Add animation classes to elements
    const addAnimationClasses = () => {
        // Sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('animate-on-scroll', 'fade-up');
        });

        // Cards
        document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .case-study-card').forEach(card => {
            card.classList.add('animate-on-scroll', 'fade-up');
        });

        // Lists
        document.querySelectorAll('.nav__list, .footer__list').forEach(list => {
            list.classList.add('animate-on-scroll', 'fade-in');
        });

        // Images and icons
        document.querySelectorAll('img, .icon').forEach(element => {
            element.classList.add('animate-on-scroll', 'zoom-in');
        });

        // Text elements
        document.querySelectorAll('h1, h2, h3, p').forEach(element => {
            element.classList.add('animate-on-scroll', 'fade-up');
        });
    };

    // Initialize animations
    addAnimationClasses();
    animateOnScroll();

    // Event listeners
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header scroll behavior
        if (currentScroll > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header--hidden');
        } else {
            header.classList.remove('header--hidden');
        }
        
        lastScroll = currentScroll;

        // Run animations
        animateOnScroll();
        handleParallax();
    });

    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            animateOnScroll();
        }, 100);
    });
});
