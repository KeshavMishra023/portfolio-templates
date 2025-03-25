// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// home section
sr.reveal('.main-content', { delay: 50, origin: 'top' });
sr.reveal('.content-image', { delay: 50, origin: 'top' });

// about section
sr.reveal('.title', { delay: 50, origin: 'top' });
sr.reveal('.box-wrap', { delay: 50, origin: 'left' });

// skills section
sr.reveal('.topic1', { delay: 50, origin: 'right' });
sr.reveal('.tool', { delay: 50, origin: 'left' });
sr.reveal('.topic2', { delay: 50, origin: 'right' });
sr.reveal('.tech', { delay: 50, origin: 'left' });

// projects section
sr.reveal('.project-box-wrap', { delay: 50, origin: 'left' });

// contact section
sr.reveal('.container', { delay: 50, origin: 'left' });