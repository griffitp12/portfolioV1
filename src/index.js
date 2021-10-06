"use strict";
// functions
var handleClick = function (e) {
    var _a;
    var target = e.target;
    if (target.tagName === 'DIV') {
        var sibling = target.nextElementSibling;
        toggleClass(sibling, 'project-details', 'project-details-open');
    }
    else if (target.tagName === 'P') {
        var aunt = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        toggleClass(aunt, 'project-details', 'project-details-open');
    }
    /* if ((e.target as Element).querySelector('.project-details')) {
        const target = (e.target as Element).querySelector('div') as Element
        target.className = 'project-details-open'
    } else {
        const target = (e.target as Element).querySelector('div') as Element
        console.log(target)
        target.className = 'project-details'
    } */
};
var toggleClass = function (target, class1, class2) {
    if (target.className === class1) {
        console.log(class2);
        target.className = class2;
        console.log('class1', target.className);
    }
    else if (target.className === class2) {
        target.className = class1;
        console.log('class2', target.className);
    }
    else {
        console.log('something is wrong with the toggleClass function');
    }
};
// selectors
/* const projectBoxes = document.querySelectorAll('.project-container') */
var projectSummaries = document.querySelectorAll('.project-summary');
// events
/* if (projectBoxes) {
    projectBoxes.forEach(box => box.addEventListener('click', handleClick))
} */
if (projectSummaries) {
    projectSummaries.forEach(function (summary) { return summary.addEventListener('click', handleClick); });
}
