class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		};

		this.startButton.addEventListener("click", this.start);
		this.pauseButton.addEventListener("click", this.pause);
	};

	start = () => {
		this.tick();
		this.intervalId = setInterval(this.tick, 20);
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			};
		} else {
			this.timeRemaining -= .02;
			if (this.onTick) {
				this.onTick();
			};
		};
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	};

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	};
};