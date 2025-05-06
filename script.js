// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('header a[href^="#"], footer a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        // Smooth scroll adjustment if needed
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Optional: Add offset if header overlaps content
                // const headerOffset = document.querySelector('header').offsetHeight;
                // const elementPosition = targetElement.getBoundingClientRect().top;
                // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                // window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                // e.preventDefault();
            }
        }
    });
});

// Adjust main content padding based on footer height dynamically (optional)
// function adjustMainPadding() {
//    const footerHeight = footer.offsetHeight;
//    mainContent.style.paddingBottom = `${footerHeight}px`;
// }
// window.addEventListener('resize', adjustMainPadding);
// adjustMainPadding();