// functions

const handleProjectClick = (e: Event) => {
	const target = e.target as HTMLElement
	if (target.tagName === 'DIV') {
		// in the current iteration, this will never be DIV
		const sibling = target.nextElementSibling as HTMLElement
		toggleClasses(sibling, 'project-details', 'project-details-open', sibling.id, projectDetails)
	} else if (target.tagName === 'P') {
		const aunt = target.parentElement?.nextElementSibling as HTMLElement
		toggleClasses(aunt, 'project-details', 'project-details-open', aunt.id, projectDetails)
	} else if (target.tagName === 'SPAN') {
		const greatAunt = target.parentElement?.parentElement?.nextElementSibling as HTMLElement
		toggleClasses(greatAunt, 'project-details', 'project-details-open', greatAunt.id, projectDetails)
	}
}

const toggleClasses = (target: Element, class1: string, class2: string, targetId?: string, details?: (HTMLElement | undefined)[]): void => {
	if (details) {
		details?.forEach((detail) => {
			if (detail) {
				if (detail.id !== targetId) {
					detail.className = class1
				}
			}
		})
	}

	if (target.className === class1) {
		target.className = class2
	} else if (target.className === class2) {
		target.className = class1
	} else {
		console.log('something is wrong with the toggleClass function')
	}
}

const testAlert = () => {
	console.log('now')
	alert('now')
}

// selectors

const projectSummaries: NodeListOf<HTMLElement> = document.querySelectorAll('.project-summary')
const yellowTextName = document.querySelector('#yellow-text-name')
const yellowTextDev = document.querySelector('#yellow-text-dev')
const headshot = document.querySelector('.headshot')
const spellingGamePortal = document.querySelector('#spelling-game-portal')

const projectDetails: HTMLElement[] = Array.from(projectSummaries).map((summary) => {
	if (typeof summary.nextElementSibling !== null) {
		return summary.nextElementSibling
	}
})

// events
if (projectSummaries) {
	projectSummaries.forEach((summary) => {
		summary.addEventListener('click', handleProjectClick)
		summary.addEventListener('mouseenter', () => toggleClasses(yellowTextDev as Element, 'yellow-text-before', 'yellow-text-after'))
		summary.addEventListener('mouseleave', () => toggleClasses(yellowTextDev as Element, 'yellow-text-after', 'yellow-text-before'))
	})
}

if (headshot) {
	headshot.addEventListener('mouseenter', () => toggleClasses(yellowTextName as Element, 'yellow-text-before', 'yellow-text-after'))
	headshot.addEventListener('mouseleave', () => toggleClasses(yellowTextName as Element, 'yellow-text-after', 'yellow-text-before'))
}

if (spellingGamePortal) {
	spellingGamePortal.addEventListener('click', testAlert)
}
