import {numbers} from "./numbers.js";

const numbersEntries = Object.entries(numbers)

export function parseNumber(num, selector) {
	for (let i = 0; i < numbersEntries.length; i++) {
		if (numbersEntries[i][0] === num) {
			paintNumber(numbersEntries[i][1], selector)
		}
	}
}

function paintNumber(entrie, selector) {
	cleanNumber(selector)
	const entrieValues = Object.values(entrie)
	for (let i = 0; i < entrieValues.length; i++) {
		const currentSegment = entrie[i]
		selector.querySelector(currentSegment).classList.add('clock__segment--active')
	}
}

function cleanNumber(selector) {
	const allSegments = Object.values(numbers.all)
	for (let i = 0; i < allSegments.length; i++) {
		selector.querySelector(allSegments[i]).classList.remove('clock__segment--active')
	}
}
