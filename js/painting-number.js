import {numbers} from "./numbers.js";

const numbersEntries = Object.entries(numbers)

export function parseNumber(currentNum, selector) {
	for (let i = 0; i < numbersEntries.length; i++) {
		if (numbersEntries[i][0] === currentNum) {
			paintNumber(numbersEntries[i][1], selector)
		}
	}
}

function paintNumber(numberEntrie, selector) {
	cleanNumber(selector)
	const entrieValues = Object.values(numberEntrie)
	for (let i = 0; i < entrieValues.length; i++) {
		const currentSegment = numberEntrie[i]
		selector.querySelector(currentSegment).classList.add('clock__segment--active')
	}
}

function cleanNumber(selector) {
	const allSegments = Object.values(numbers.all)
	for (let i = 0; i < allSegments.length; i++) {
		selector.querySelector(allSegments[i]).classList.remove('clock__segment--active')
	}
}
