export class Clock {
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
