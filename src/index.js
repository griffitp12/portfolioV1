"use strict";
// functions
const handleProjectClick = (e) => {
    const target = e.target;
    if (target.tagName === 'DIV') {
        // in the current iteration, this will never be DIV
        const sibling = target.nextElementSibling;
        toggleClasses(sibling, 'project-details', 'project-details-open', sibling.id, projectDetails);
    }
    else if (target.tagName === 'P') {
        const aunt = target.parentElement?.nextElementSibling;
        toggleClasses(aunt, 'project-details', 'project-details-open', aunt.id, projectDetails);
    }
    else if (target.tagName === 'SPAN') {
        const greatAunt = target.parentElement?.parentElement?.nextElementSibling;
        toggleClasses(greatAunt, 'project-details', 'project-details-open', greatAunt.id, projectDetails);
    }
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
        summary.addEventListener('mouseenter', () => toggleClasses(yellowTextDev, 'yellow-text-before', 'yellow-text-after'));
        summary.addEventListener('mouseleave', () => toggleClasses(yellowTextDev, 'yellow-text-after', 'yellow-text-before'));
    });
}
if (headshot) {
    headshot.addEventListener('mouseenter', () => toggleClasses(yellowTextName, 'yellow-text-before', 'yellow-text-after'));
    headshot.addEventListener('mouseleave', () => toggleClasses(yellowTextName, 'yellow-text-after', 'yellow-text-before'));
}
if (spellingGamePortal) {
    spellingGamePortal.addEventListener('click', () => alert('Coming Soon!'));
}
