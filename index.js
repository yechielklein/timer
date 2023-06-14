const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector('circle');

const circumference = 2 * circle.getAttribute('r') * Math.PI;
circle.setAttribute('stroke-dasharray', circumference);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick() {
		circle.setAttribute(
			'stroke-dashoffset',
			circumference * this.timeRemaining / duration - circumference
		);
	},
	onComplete() {
		console.log("finished!");
	}
});
