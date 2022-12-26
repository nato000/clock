import {parseNumber} from "./painting-number.js";
import {Clock} from "./clock-class.js";

const clock = new Clock()

const hours = document.querySelector('.clock-hour')
const firstHourNumber = hours.querySelector('#hour1')
const secondHourNumber = hours.querySelector('#hour2')

const minutes = document.querySelector('.clock-minutes')
const firstMinuteNumber = minutes.querySelector('#minute1')
const secondMinuteNumber = minutes.querySelector('#minute2')

const seconds = document.querySelector('.clock-seconds')
const firstSecondsNumber = seconds.querySelector('#second1')
const secondSecondsNumber = seconds.querySelector('#second2')

function showTime() {
	clock.start()
	showHour()
	showMinute()
	showSeconds()
	let currentTime = clock.output
	setInterval(() => {
		if (currentTime.h !== clock.output.h) {
			showHour()
			currentTime = clock.output
		}
		if (currentTime.m !== clock.output.m) {
			showMinute()
			currentTime = clock.output
		}
		showSeconds()
	}, 1000);

}

function showHour() {
	const hourArray = (clock.output.h + '').split('')
	parseNumber(hourArray[0], firstHourNumber)
	parseNumber(hourArray[1], secondHourNumber)
}

function showMinute() {
	const minuteArray = (clock.output.m + '').split('')
	parseNumber(minuteArray[0], firstMinuteNumber)
	parseNumber(minuteArray[1], secondMinuteNumber)
}

function showSeconds() {
	const secondsArray = (clock.output.s + '').split('')
	parseNumber(secondsArray[0], firstSecondsNumber)
	parseNumber(secondsArray[1], secondSecondsNumber)
}

showTime()

