"use strict";
// functions
const handleProjectClick = (e) => {
    console.log(e.target);
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
    if (target.className === class1) {
        target.className = class2;
        if (details) {
            details?.forEach((detail) => {
                if (detail) {
                    if (detail.id !== targetId) {
                        detail.className = class1;
                    }
                }
            });
        }
    }
    else if (target.className === class2) {
        target.className = class1;
    }
    else {
        console.log('something is wrong with the toggleClass function');
    }
};
// selectors
const projectSummaries = document.querySelectorAll('.project-summary');
const yellowTextName = document.querySelector('#yellow-text-name');
const yellowTextDev = document.querySelector('#yellow-text-dev');
const headshot = document.querySelector('.headshot');
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
