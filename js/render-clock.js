import {numbers} from "./numbers.js";

const hours = document.querySelector('.clock-hours')
const minutes = document.querySelector('.clock-minutes')
const seconds = document.querySelector('.clock-seconds')

export function renderClock() {
	renderClockHours()
	renderClockMinutes()
	renderClockSeconds()
}

function renderSegments(currentNumber) {
	const segments = Object.values(numbers.all)
	for (let i = 0; i < segments.length; i++) {
		const newDiv = document.createElement('div')
		newDiv.setAttribute('class', `clock__segment ${segments[i].slice(1)}`)
		currentNumber.append(newDiv)
	}
}

function renderClockHours() {
	const hour1 = document.createElement('div')
	hour1.setAttribute('id', 'hour1')
	hour1.setAttribute('class', 'clock__number')
	hours.append(hour1)
	renderSegments(hour1)
	const hour2 = document.createElement('div')
	hour2.setAttribute('id', 'hour2')
	hour2.setAttribute('class', 'clock__number')
	hours.append(hour2)
	renderSegments(hour2)
}

function renderClockMinutes() {
	const minute1 = document.createElement('div')
	minute1.setAttribute('id', 'minute1')
	minute1.setAttribute('class', 'clock__number')
	minutes.append(minute1)
	renderSegments(minute1)
	const minute2 = document.createElement('div')
	minute2.setAttribute('id', 'minute2')
	minute2.setAttribute('class', 'clock__number')
	minutes.append(minute2)
	renderSegments(minute2)
}

function renderClockSeconds() {
	const second1 = document.createElement('div')
	second1.setAttribute('id', 'second1')
	second1.setAttribute('class', 'clock__number')
	seconds.append(second1)
	renderSegments(second1)
	const second2 = document.createElement('div')
	second2.setAttribute('id', 'second2')
	second2.setAttribute('class', 'clock__number')
	seconds.append(second2)
	renderSegments(second2)
}

