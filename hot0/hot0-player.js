
$(document).ready(function(){
	 video.play();
});


// add video list
var vList = [

	'../mp4/hot0/seq00.mp4',
	'../mp4/hot0/seq01.mp4',
	'../mp4/hot0/seq02.mp4',
	'../mp4/hot0/seq03.mp4',

	'../mp4/hot0/seq000.mp4'

	];

var vLen = vList.length;
var curr = 0;
var video = document.getElementById("myVideo");
video.addEventListener('ended', function(){
	play();
});

function play() {
	video.src = vList[curr];
	video.load();
	video.play();
	curr++;
	if(curr >= vLen){

		curr = 0;
	}
}
