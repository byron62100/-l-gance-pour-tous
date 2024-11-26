// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations au défilement avec effet dynamique
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach((section) => observer.observe(section));

// Effet néon interactif sur les boutons
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.classList.add('neon-glow');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('neon-glow');
    });
});

// Bouton "Retour en haut"
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '⬆';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
