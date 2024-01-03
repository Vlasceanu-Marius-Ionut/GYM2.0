document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animation
    const sections = document.querySelectorAll('.fade-in-section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile-friendly navigation toggle
    const mobileNavIcon = document.getElementById('mobileNavIcon');
    const nav = document.querySelector('nav ul');

    mobileNavIcon.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic navigation highlight based on current section
    const sectionsArray = Array.from(sections);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        const currentSection = sectionsArray.find(section => {
            const sectionTop = section.offsetTop - 50; // Adjusted for better accuracy
            const sectionBottom = sectionTop + section.clientHeight;

            return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        });

        // Highlight current section in navigation
        if (currentSection) {
            const currentSectionId = currentSection.getAttribute('id');
            const correspondingNavElement = document.querySelector(`nav #${currentSectionId}`);

            // Remove previous highlight
            document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));

            // Add highlight to the current section in navigation
            if (correspondingNavElement) {
                correspondingNavElement.parentElement.classList.add('active');
            }
        }
    });
});
