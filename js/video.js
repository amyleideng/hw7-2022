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
		console.log("Mute video is set to " + video.muted);
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Mute video is set to " + video.muted);
	}
})

// moving the volume slider
var slider = document.querySelector("#slider");
	slider.addEventListener("volumechange", function(){
	// video.volume = ;
	console.log("Change Volume");
})

// clicking slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("The video speed is " + video.playbackRate);
})

//clicking speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("The video speed is " + video.playbackRate)
})

//clicking skip ahead
document.querySelector("#skip").addEventListener("click", skip);
	function skip() {
		video.currentTime += 10;
		console.log("Current time is " + video.currentTime);
		if (video.onended = function() {
			video.loop = false;
		});
	}

//clicking oldschool
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Added the old school class");
})

//original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed the old school class");
})