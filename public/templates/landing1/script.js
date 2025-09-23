// Modern Landing Page Template - Amazing Product
// Interactive functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature card animations
    const featureCards = document.querySelectorAll('.feature-card');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initially hide elements for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Testimonial cards animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        // Add background blur on scroll
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // CTA button click tracking (for analytics)
    const ctaButtons = document.querySelectorAll('.cta .btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track button clicks (integrate with analytics service)
            console.log('CTA button clicked:', this.textContent.trim());

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Form handling (if forms are added later)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const email = form.querySelector('input[type="email"]');
            if (email && !email.value.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }

            // Show success message
            alert('Thank you for your interest! We\'ll be in touch soon.');
            form.reset();
        });
    });

    // Mobile menu toggle (if needed for mobile navigation)
    function createMobileMenu() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');

        if (window.innerWidth <= 768) {
            // Create hamburger menu
            const hamburger = document.createElement('div');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '☰';

            nav.appendChild(hamburger);

            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('mobile-menu-open');
            });
        }
    }

    // Initialize mobile menu
    createMobileMenu();

    // Resize handler
    window.addEventListener('resize', function() {
        createMobileMenu();
    });

    // Add loading animation for images (if images are added)
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // Initially hide images for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Performance optimization: Lazy load sections
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id !== 'hero') { // Don't lazy load hero
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            observer.observe(section);
        }
    });

    console.log('Amazing Product template loaded successfully!');
});