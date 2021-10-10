// functions

const handleProjectClick = (e: Event) => {
	const target = e.currentTarget as HTMLElement
	const sibling = target.nextElementSibling as HTMLElement
	const arrow = target.childNodes[0] as HTMLElement
	toggleClasses(sibling, 'project-details', 'project-details--open', sibling.id, projectDetails)
	toggleClasses(arrow, 'arrow-down', 'arrow-up')
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
	if (target.classList.contains(class1)) {
		target.classList.replace(class1, class2)
	} else if (target.classList.contains(class2)) {
		target.classList.replace(class2, class1)
	} else {
		console.log('something is wrong with the toggleClass function')
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

const projectDetails: HTMLElement[] = Array.from(projectSummaries).map((summary) => {
	if (summary.nextElementSibling) {
		return summary.nextElementSibling
	}
})

// events
if (projectSummaries) {
	projectSummaries.forEach((summary) => {
		summary.addEventListener('click', handleProjectClick)
		summary.addEventListener('mouseenter', () => toggleClasses(yellowTextDev as Element, 'yellow-text--before', 'yellow-text--after'))
		summary.addEventListener('mouseleave', () => toggleClasses(yellowTextDev as Element, 'yellow-text--after', 'yellow-text--before'))
	})
}

if (headshot) {
	headshot.addEventListener('mouseenter', () => toggleClasses(yellowTextName as Element, 'yellow-text--before', 'yellow-text--after'))
	headshot.addEventListener('mouseleave', () => toggleClasses(yellowTextName as Element, 'yellow-text--after', 'yellow-text--before'))
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
