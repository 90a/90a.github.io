
$(document).ready(function(){
	 video.play();
});


// add video list
var vList = [


	'../mp4/amaz0/mv1.mp4',
	'../mp4/amaz0/mv2.mp4',
	'../mp4/amaz0/mv3.mp4',

	'../mp4/amaz0/mv0.mp4'

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
