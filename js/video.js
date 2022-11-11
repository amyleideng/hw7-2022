var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

//clicking play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
})

// clicking pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
})

// clicking mute/unmute button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Mute video");
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmute video");
	}
})

//changing volume on slider
let volume = document.querySelector("#slider");
volume.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	console.log("The current value is " + video.volume);
})

// clicking slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

//clicking speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= (10/9);
	console.log("Speed is " + video.playbackRate)
})

//clicking skip ahead
document.querySelector("#skip").addEventListener("click", skip);
	function skip() {
		video.currentTime += 10;
		console.log("Video current time is " + video.currentTime);
		if (video.onended = function() {
			video.loop = false;
			video.currentTime = 0
			console.log("Video current time is " + video.currentTime);
		});
	}

//clicking oldschool
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Added the old school class");
})

//clicking original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed the old school class");
})