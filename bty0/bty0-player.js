
$(document).ready(function(){
	 video.play();
});


// add video list
var vList = [

	'../mp4/bty0/seq01.mp4',
	'../mp4/bty0/seq02.mp4',
	'../mp4/bty0/seq03.mp4',
	'../mp4/bty0/seq04.mp4',
	'../mp4/bty0/seq05.mp4',	
	
	'../mp4/bty0/seq00.mp4'


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
