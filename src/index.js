"use strict";
// functions
const handleProjectClick = (e) => {
    const target = e.currentTarget;
    const sibling = target.nextElementSibling;
    toggleClasses(sibling, 'project-details', 'project-details--open');
    toggleOtherClasses(target.id, projectSummaries, 'project-details', 'project-details--open');
    const arrow = target.childNodes[0];
    toggleClasses(arrow, 'arrow-down', 'arrow-up');
    toggleOtherClasses(target.id, projectSummaries, 'arrow-down', 'arrow-up');
};
const toggleClasses = (target, class1, class2) => {
    if (target.classList.contains(class1)) {
        target.classList.replace(class1, class2);
    }
    else if (target.classList.contains(class2)) {
        target.classList.replace(class2, class1);
    }
    else {
        console.log('something is wrong with the toggleClass function');
    }
};
const toggleOtherClasses = (targetId, elementList, class1, class2) => {
    for (const element of elementList) {
        if (element.id !== targetId) {
            const sibling = element.nextElementSibling;
            if (sibling && sibling.classList.contains(class2)) {
                sibling.classList.replace(class2, class1);
            }
            const arrow = element.childNodes[0];
            if (arrow && arrow.classList.contains(class2)) {
                arrow.classList.replace(class2, class1);
            }
        }
    }
};
// selectors
const hamburgerMenu = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelectorAll('.header-navlink');
const projectSummaries = document.querySelectorAll('.project-summary');
const yellowTextName = document.querySelector('#name');
const yellowTextDev = document.querySelector('#dev');
const headshot = document.querySelector('.hero__headshot');
const spellingGamePortal = document.querySelector('#spelling-game-portal');
// events
if (projectSummaries) {
    projectSummaries.forEach((summary) => {
        summary.addEventListener('click', handleProjectClick);
        summary.addEventListener('mouseenter', () => toggleClasses(yellowTextDev, 'yellow-text--before', 'yellow-text--after'));
        summary.addEventListener('mouseleave', () => toggleClasses(yellowTextDev, 'yellow-text--after', 'yellow-text--before'));
    });
}
if (headshot) {
    headshot.addEventListener('mouseenter', () => toggleClasses(yellowTextName, 'yellow-text--before', 'yellow-text--after'));
    headshot.addEventListener('mouseleave', () => toggleClasses(yellowTextName, 'yellow-text--after', 'yellow-text--before'));
}
if (spellingGamePortal) {
    spellingGamePortal.addEventListener('click', () => alert('Coming Soon!'));
}
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navbar?.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
}
if (navlinks) {
    navlinks.forEach((navlink) => {
        navlink.addEventListener('click', () => {
            navbar?.classList.toggle('active');
            hamburgerMenu?.classList.toggle('active');
        });
    });
}
