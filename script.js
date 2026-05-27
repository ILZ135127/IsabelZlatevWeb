document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initScrollReveal();
    initSmoothNav();
    initHeroAnimation();
});

function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = document.querySelectorAll('a, button, .work-item, .skills-grid span');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.section-header, .about-bio, .about-details, .statement-text, .contact-label, .contact-heading, .contact-links'
    );
    revealElements.forEach(el => el.classList.add('reveal'));

    const workItems = document.querySelectorAll('.work-item');
    const expItems = document.querySelectorAll('.exp-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));

    workItems.forEach((item, i) => {
        setTimeout(() => observer.observe(item), i * 50);
    });

    expItems.forEach((item, i) => {
        setTimeout(() => observer.observe(item), i * 50);
    });
}

function initSmoothNav() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initHeroAnimation() {
    const lines = document.querySelectorAll('.hero-name .line');
    lines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(100%)';
        setTimeout(() => {
            line.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 300 + i * 200);
    });

    const heroInfo = document.querySelector('.hero-info');
    if (heroInfo) {
        heroInfo.style.opacity = '0';
        heroInfo.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroInfo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroInfo.style.opacity = '1';
            heroInfo.style.transform = 'translateY(0)';
        }, 900);
    }
}
