/*
	author: Sylwester Mielniczuk
	email: flaboy.com@gmail.com
	
	very simple audio for game

*/

var audioSet = {
	audio: document.getElementsByTagName('audio'),
	setup:function() {
		this.audio[0].addEventListener("ended", function() {
			console.log('ended');
			audioSet.playNext();
		});				
	},	
	//url: "http://mielniczuk.com/music/yt/ambient",
	url: "./assets/music",
	files: [
          "The_Inner_Sound.mp3",
          "SaturnUltimate.mp3",
          "Saturn5.mp3",      
          "Krishna_s_Calliope.mp3",
          "The_Anunnaki_Return.mp3",
          "Spirit_of_Fire.mp3",
          "Divine_Life_Society.mp3",
          "Mooncat1.mp3"
		],
	startId:1,
	play: function (id, v) {
		var src = this.url + '/' + this.files[id];
		var a = this.audio[0];
		console.log('audioSet play:', src);
		a.src = src;
		a.sid = id;
		a.file = this.files[id];
		a.play();
		console.log("Duration: ",this.getDuration());
	},
	volume: function(v) {
		var a = this.audio[0];
		a.volume = v;
	},
	playNext:function() {
		var a = this.audio[0];
		this.audio[0].sid++;
		if(this.audio[0].sid >= this.files.length) {
			this.audio[0].sid = 0;
		}
		this.play(this.audio[0].sid);		
	},
	getDuration:function() {
		var a = this.audio[0];
		console.log(a.duration);
	},
	start: function(id) {
		if(id == undefined) {
			id = this.startId;
		}
		this.play(id);
		
		//a.volume = v;
	},
	pause: function() {
		var a = this.audio[0];
		a.pause();
	}
}

export let AudioPreset = audioSet;


//$('audio').ready(function () {
//	
//	if(game.radio == true) {
//	
//		console.log('audio ready');
//		
//		audioSet.setup();
//		audioSet.start(Math.floor(Math.random()*parseInt(audioSet.files.length)));
//		audioSet.volume(0.08);
//		
//	}
//	
//	//gui.add(audioSet.audio[0],'currentTime').listen();
//	//gui.add(audioSet.audio[0],'file').listen();
//
//	
//})
