"use strict";
// functions
const handleProjectClick = (e) => {
    const target = e.currentTarget;
    const sibling = target.nextElementSibling;
    const arrow = target.childNodes[0];
    toggleClasses(sibling, 'project-details', 'project-details--open', sibling.id, projectDetails);
    toggleClasses(arrow, 'arrow-down', 'arrow-up');
};
const toggleClasses = (target, class1, class2, targetId, details) => {
    if (details) {
        details?.forEach((detail) => {
            if (detail) {
                if (detail.id !== targetId) {
                    detail.className = class1;
                }
            }
        });
    }
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
// selectors
const hamburgerMenu = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelectorAll('.header-navlink');
const projectSummaries = document.querySelectorAll('.project-summary');
const yellowTextName = document.querySelector('#name');
const yellowTextDev = document.querySelector('#dev');
const headshot = document.querySelector('.hero__headshot');
const spellingGamePortal = document.querySelector('#spelling-game-portal');
const projectDetails = Array.from(projectSummaries).map((summary) => {
    if (summary.nextElementSibling) {
        return summary.nextElementSibling;
    }
});
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
