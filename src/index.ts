// functions

const handleClick = (e: Event) => {
	const target = e.target as Element
	if (target.tagName === 'DIV') {
		const sibling = target.nextElementSibling
		toggleClass(sibling as Element, 'project-details', 'project-details-open')
	} else if (target.tagName === 'P') {
		const aunt = target.parentElement?.nextElementSibling
		toggleClass(aunt as Element, 'project-details', 'project-details-open')
	}
	/* if ((e.target as Element).querySelector('.project-details')) {
		const target = (e.target as Element).querySelector('div') as Element
		target.className = 'project-details-open'
	} else {
		const target = (e.target as Element).querySelector('div') as Element
		console.log(target)
		target.className = 'project-details'
	} */
}

const toggleClass = (target: Element, class1: string, class2: string): void => {
	if (target.className === class1) {
		console.log(class2)
		target.className = class2
		console.log('class1', target.className)
	} else if (target.className === class2) {
		target.className = class1
		console.log('class2', target.className)
	} else {
		console.log('something is wrong with the toggleClass function')
	}
}

// selectors

/* const projectBoxes = document.querySelectorAll('.project-container') */
const projectSummaries = document.querySelectorAll('.project-summary')

// events

/* if (projectBoxes) {
	projectBoxes.forEach(box => box.addEventListener('click', handleClick))
} */
if (projectSummaries) {
	projectSummaries.forEach((summary) => summary.addEventListener('click', handleClick))
}
