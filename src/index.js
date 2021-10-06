'use strict'
// functions
const handleClick = (e) => {
	const target = e.target
	if (target.tagName === 'DIV') {
		const sibling = target.nextElementSibling
		toggleClasses(sibling, 'project-details', 'project-details-open', sibling.id)
	} else if (target.tagName === 'P') {
		const aunt = target.parentElement?.nextElementSibling
		toggleClasses(aunt, 'project-details', 'project-details-open', aunt.id)
	}
}
const toggleClasses = (target, class1, class2, targetId) => {
	if (target.className === class1) {
		target.className = class2
		projectDetails.forEach((detail) => {
			if (detail) {
				if (detail.id !== targetId) {
					detail.className = class1
				}
			}
		})
	} else if (target.className === class2) {
		target.className = class1
	} else {
		console.log('something is wrong with the toggleClass function')
	}
}
// selectors
const projectSummaries = document.querySelectorAll('.project-summary')
const projectDetails = Array.from(projectSummaries).map((summary) => {
	if (summary.nextElementSibling) {
		return summary.nextElementSibling
	}
})
// events
if (projectSummaries) {
	projectSummaries.forEach((summary) => summary.addEventListener('click', handleClick))
}
