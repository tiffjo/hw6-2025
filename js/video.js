var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");

	const volumeDisplay=document.querySelector("#volume");
	video.autoplay=false;
	video.loop=false;
	video.volume = 1.0;
	video.load();

	//hide volume display before
	volumeDisplay.style.display="none";


	//set volume
	volumeDisplay.innerHTML=video.volume*100 + "%";


	// play video
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		volumeDisplay.style.display="block";
		volumeDisplay.innerHTML=video.volume*100 + "%";
	});

	// pause video
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});

	// slow video
	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log(`Speed is ${video.playbackRate.toFixed(5)}`);
	});

	// speed up video
	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log(`Speed is ${video.playbackRate.toFixed(5)}`);
	});

	// Skip Ahead
	document.querySelector("#skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log(`Current location: ${video.currentTime.toFixed(2)}s`);
	});

	// un/mute video
	document.querySelector("#mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.innerText = video.muted ? "Unmute" : "Mute";
	});



	// volume slider
	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerText = `${this.value}%`;
	});

	//styled

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// original
	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

});