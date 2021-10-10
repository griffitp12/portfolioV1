// functions

const handleProjectClick = (e: Event) => {
	const target = e.currentTarget as HTMLElement
	const sibling = target.nextElementSibling as HTMLElement
	toggleClasses(sibling, 'project-details', 'project-details--open')
	toggleOtherClasses(target.id, projectSummaries, 'project-details', 'project-details--open')

	const arrow = target.childNodes[0] as HTMLElement
	toggleClasses(arrow, 'arrow-down', 'arrow-up')
	toggleOtherClasses(target.id, projectSummaries, 'arrow-down', 'arrow-up')
}

const toggleClasses = (target: HTMLElement, class1: string, class2: string): void => {
	if (target.classList.contains(class1)) {
		target.classList.replace(class1, class2)
	} else if (target.classList.contains(class2)) {
		target.classList.replace(class2, class1)
	} else {
		console.log('something is wrong with the toggleClass function')
	}
}

const toggleOtherClasses = (targetId: string, elementList: NodeListOf<HTMLElement>, class1: string, class2: string): void => {
	for (const element of elementList) {
		if (element.id !== targetId) {
			const sibling = element.nextElementSibling
			if (sibling && sibling.classList.contains(class2)) {
				sibling.classList.replace(class2, class1)
			}

			const arrow = element.childNodes[0] as HTMLElement

			if (arrow && arrow.classList.contains(class2)){
				arrow.classList.replace(class2, class1)
			}
		} 
	}
}
// selectors

const hamburgerMenu: HTMLElement | null = document.querySelector('.hamburger')
const navbar: HTMLElement | null = document.querySelector('.navbar')
const navlinks = document.querySelectorAll('.header-navlink')
const projectSummaries: NodeListOf<HTMLElement> = document.querySelectorAll('.project-summary')
const yellowTextName: HTMLElement | null = document.querySelector('#name')
const yellowTextDev: HTMLElement | null = document.querySelector('#dev')
const headshot: HTMLElement | null = document.querySelector('.hero__headshot')
const spellingGamePortal: HTMLElement | null = document.querySelector('#spelling-game-portal')

// events
if (projectSummaries) {
	projectSummaries.forEach((summary) => {
		summary.addEventListener('click', handleProjectClick)
		summary.addEventListener('mouseenter', () => toggleClasses(yellowTextDev as HTMLElement, 'yellow-text--before', 'yellow-text--after'))
		summary.addEventListener('mouseleave', () => toggleClasses(yellowTextDev as HTMLElement, 'yellow-text--after', 'yellow-text--before'))
	})
}

if (headshot) {
	headshot.addEventListener('mouseenter', () => toggleClasses(yellowTextName as HTMLElement, 'yellow-text--before', 'yellow-text--after'))
	headshot.addEventListener('mouseleave', () => toggleClasses(yellowTextName as HTMLElement, 'yellow-text--after', 'yellow-text--before'))
}

if (spellingGamePortal) {
	spellingGamePortal.addEventListener('click', () => alert('Coming Soon!'))
}

if (hamburgerMenu) {
	hamburgerMenu.addEventListener('click', () => {
		navbar?.classList.toggle('active')
		hamburgerMenu.classList.toggle('active')
	})
}

if (navlinks) {
	navlinks.forEach((navlink) => {
		navlink.addEventListener('click', () => {
			navbar?.classList.toggle('active')
			hamburgerMenu?.classList.toggle('active')
		})
	})
}
