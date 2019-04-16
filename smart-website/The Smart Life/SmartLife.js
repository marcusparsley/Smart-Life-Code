const videos = document.querySelectorAll("video")

videos.forEach(video => {
	video.addEventListener("mouseover",function () {
		this.play()
	})
})