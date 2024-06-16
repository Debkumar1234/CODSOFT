// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.photo-1 img');
    const sections1 = document.querySelectorAll('.photo-2 img');
    const details_1 = document.querySelectorAll('.details-1');
    const details_2 = document.querySelectorAll('.details-2');
    const cards = document.querySelectorAll('.card');
    const h1 = document.querySelectorAll('.project-h1');
    const company = document.querySelectorAll('.company');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-right');
            } else {
                entry.target.classList.remove('slide-right');
            }
        });
    };
    const observerCallback1 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-left');
            } else {
                entry.target.classList.remove('slide-left');
            }
        });
    };
    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-top');
            } else {
                entry.target.classList.remove('slide-top');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const observer1 = new IntersectionObserver(observerCallback1, observerOptions);
    const observer2 = new IntersectionObserver(observerCallback2, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    details_1.forEach(detail => {
        observer1.observe(detail);
    });
    cards.forEach(detail => {
        observer2.observe(detail);
    });
    sections1.forEach(detail => {
        observer.observe(detail);
    });
    details_2.forEach(detail => {
        observer1.observe(detail);
    });
    h1.forEach(detail => {
        observer2.observe(detail);
    });
    company.forEach(detail => {
        observer.observe(detail);
    });

});
