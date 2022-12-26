import {numbers} from "./numbers.js";
import {parseNumber} from "./painting-number.js";

class Clock {
	constructor() {
		this.output = {}
	}

	getTime() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		this.output = {
			'h': hours,
			'm': mins,
			's': secs
		}
		return this.output
	}

	start() {
		this.getTime();
		setInterval(() => {
			this.getTime()
			return this.output
		}, 1000);
	}
}

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

