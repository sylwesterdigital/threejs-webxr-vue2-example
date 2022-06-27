__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_geometries_BoxLineGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/geometries/BoxLineGeometry.js */ "./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_BasisTextureLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/BasisTextureLoader.js */ "./node_modules/three/examples/jsm/loaders/BasisTextureLoader.js");
/* harmony import */ var three_examples_jsm_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/webxr/VRButton.js */ "./node_modules/three/examples/jsm/webxr/VRButton.js");
/* harmony import */ var three_examples_jsm_webxr_XRControllerModelFactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/webxr/XRControllerModelFactory.js */ "./node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js");
/* harmony import */ var three_examples_jsm_webxr_XRHandModelFactory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/webxr/XRHandModelFactory.js */ "./node_modules/three/examples/jsm/webxr/XRHandModelFactory.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three-mesh-ui */ "./node_modules/three-mesh-ui/src/three-mesh-ui.js");
/* harmony import */ var three_mesh_ui_examples_utils_VRControl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three-mesh-ui/examples/utils/VRControl.js */ "./node_modules/three-mesh-ui/examples/utils/VRControl.js");
/* harmony import */ var three_mesh_ui_examples_utils_ShadowedLight_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three-mesh-ui/examples/utils/ShadowedLight.js */ "./node_modules/three-mesh-ui/examples/utils/ShadowedLight.js");
/* harmony import */ var _assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fonts/gr/Arev-msdf.json */ "./assets/fonts/gr/Arev-msdf.json");
/* harmony import */ var _assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/fonts/gr/Arev.png */ "./assets/fonts/gr/Arev.png");
/* harmony import */ var _assets_fonts_Roboto_msdf_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/fonts/Roboto-msdf.json */ "./assets/fonts/Roboto-msdf.json");
/* harmony import */ var _assets_fonts_Roboto_msdf_json__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Roboto_msdf_json__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_fonts_Roboto_msdf_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/fonts/Roboto-msdf.png */ "./assets/fonts/Roboto-msdf.png");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hls.js */ "./node_modules/hls.js/dist/hls.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_15__);
console.log('Running App version ' + "V.2021-12-08T17:09:33.680Z"); //if (!BROWSER_SUPPORTS_HTML5) require('html5shiv');




/* Controls */




/* Loaders */

const basisLoader = new three_examples_jsm_loaders_BasisTextureLoader_js__WEBPACK_IMPORTED_MODULE_4__.BasisTextureLoader();
basisLoader.setTranscoderPath('assets/js/');
/* VR */




/* Greensock */


/* Mesh UI */




/* Fonts */
// import msdFontJSON from '../assets/fonts/gr/new-msdf.json';
// import msdFontTexture from '../assets/fonts/gr/new.png';





/* HLS Video */


var w = window;
let video;
let videoSrc = "./assets/media/intro/intro2_index.m3u8";
let videosData = [{
  n: "intro",
  url: "./assets/media/intro/intro2_index.m3u8"
}, {
  n: "un",
  url: "./assets/media/un/prog_index.m3u8"
}];
w.videosData = videosData;
/* Emblems */
// import Emblems from './libs/emblems.js';
// w.emblems = Emblems;

/* Content Data */

let cData = {}; //let curConf = 0;

let curConf = "./assets/Content.json"; // let cLang = [
//   {id:"english", path: "./assets/Content.json"},
//   {id:"greek", path: "./assets/ContentGR.json"}  
// ]

let cLang = "english";
w.cData = cData;
w.cLang = cLang; //w.contentData = contentData

/* Question */

let currentQuestion;
let quizSession = [];
let quizSessionPos = 0;
let isMoving = false;
let answerTimeStart;
/* Raycaster */

const raycaster = new three__WEBPACK_IMPORTED_MODULE_16__.Raycaster();
const mouse = new three__WEBPACK_IMPORTED_MODULE_16__.Vector2();
mouse.x = mouse.y = null;
let selectState = false;
let objRC = [];
w.objRC = objRC;
let vrControl;
/* Interim settings */

var ready = false;
w.ready = ready;
var camera, scene, renderer;
var htmlcont, controls;
var ground, groundTx, groundM;
var sceneWidth, sceneHeight;
/* ligths */

var pointLight, dirLight;
/* xr controllers */

let controller1, controller2;
let controllerGrip1, controllerGrip2;
let session_init = false;
let iddleTime = 0;
let modelsArr = [];
/* Analytics */

let analData = {};
analData.connected = false;
analData.apiURL = "";
w.analData = analData;
/* */

function checkReady() {
  var arr = modelsArr;
  var err = false;
  var modelsCounter = 0;

  for (var i = 0; i < arr.length; i++) {
    var r = arr[i];
    var f = w.scene.getObjectByName(r);

    if (!f) {
      console.log('not loaded:', r);
      modelsCounter++;
      err = false;
    }
  }

  console.log('modelsCounter:', modelsCounter);

  if (modelsCounter == 0) {
    w.ready = true;
    switchOnLights(0.9); //cloneEmblems();
  }
}

function wireFrameAll(obj) {
  for (var i = 0; i < obj.children.length; i++) {
    let f = obj.children[i];

    if (f.material) {
      f.material.wireframe = true;
      console.log(f.material.wireframe);
    }
  }
}

w.wireFrameAll = wireFrameAll;
var clock = new three__WEBPACK_IMPORTED_MODULE_16__.Clock();
var rotationSpeed = 0.25; //units a second

var delta = 0;

function switchOnLights(intensity) {
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(dirLight, {
    intensity: intensity,
    duration: 2,
    delay: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(pointLight, {
    intensity: intensity,
    duration: 2,
    delay: 1
  });
}

w.switchOnLights = switchOnLights;
/* 

    Sounds, Audio, FX 
    ----------------------

                                */
// audio files for sounds

var sounds = {};
var soundsData = [{
  "name": "success",
  "file": "assets/audio/fx/Pickup_Coin5.wav"
}, {
  "name": "cancel",
  "file": "assets/audio/fx/Cancel1.wav"
}, {
  "name": "tap",
  "file": "assets/audio/fx/Tap1.wav"
}, {
  "name": "ok",
  "file": "assets/audio/fx/Ok1.wav"
}, {
  "name": "out",
  "file": "assets/audio/fx/Out1.wav"
}, {
  "name": "confirm",
  "file": "assets/audio/fx/Confirm1.wav"
}, {
  "name": "select",
  "file": "assets/audio/fx/Pickup_Coin4.wav"
}, {
  "name": "error",
  "file": "assets/audio/fx/Pickup_Coin4.wav"
}, {
  "name": "glitch",
  "file": "assets/audio/fx/Glitch1.wav"
}, {
  "name": "win",
  "file": "assets/audio/fx/Win1.wav"
}, {
  "name": "fine",
  "file": "assets/audio/fx/Fine1.wav"
}, {
  "name": "fail",
  "file": "assets/audio/fx/Fail1.wav"
}]; // audio listeners and loaders

var audioListener, audioLoader;
w.sounds = sounds; // create global store for sounds, 
// and play them when you need -> sounds.select.play()

function initSound() {
  console.log(" -- initSound");
  audioListener = new three__WEBPACK_IMPORTED_MODULE_16__.AudioListener();
  camera.add(audioListener);
  audioLoader = new three__WEBPACK_IMPORTED_MODULE_16__.AudioLoader();

  for (var i = 0; i < soundsData.length; i++) {
    let sr = soundsData[i];
    sounds[sr.name] = new three__WEBPACK_IMPORTED_MODULE_16__.Audio(audioListener);
    scene.add(sounds[sr.name]);
    audioLoader.load(sr.file, function (audioBuffer) {
      sounds[sr.name].setBuffer(audioBuffer); //sound1.play();
    }, function (xhr) {//console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    }, function (err) {
      console.log('An error happened');
    });
  }
}

w.initSound = initSound;
/*
    Clock and Countdown Intervals
    -----------------------------------------------------------------------
                                    */

let clockInterval;
w.clockInterval = clockInterval;
let countDownMax = 3 * 60; //3 minutes

let countDownKey = 0;

function makeCountdown() {
  clearInterval(w.clockInterval);

  if (scene.getObjectByName("CLOCK_TEXT")) {
    scene.getObjectByName("CLOCK_TEXT").set({
      content: String("Time left:\n")
    }); // scene.getObjectByName("CLOCK_TEXT").set({ content: String( "TIME LEFT\n\n" ) } );

    countDownKey = countDownMax;
    w.clockInterval = setInterval(() => {
      countDownKey -= 1;

      if (countDownKey <= 0) {
        console.log("Countdown Finished");
        clearInterval(w.clockInterval);
      }

      scene.getObjectByName("CLOCK_COUNTER").set({
        content: String(countDownKey)
      });
    }, 1000);
  }
}

w.makeCountdown = makeCountdown;
/* TV SET */

function makeTV() {
  let cD = window.cData;
  /* TV SET */

  var movieMaterial = new three__WEBPACK_IMPORTED_MODULE_16__.MeshBasicMaterial({
    color: 0x000000,
    overdraw: true,
    side: three__WEBPACK_IMPORTED_MODULE_16__.DoubleSide
  }); // the geometry on which the movie will be displayed;
  //    movie image will be scaled to fit these dimensions.
  // 1.85 : 1
  // 1/78 : 1

  var movieGeometry = new three__WEBPACK_IMPORTED_MODULE_16__.PlaneGeometry(1.78 * 2, 1 * 2, 4, 4);
  var tvset = new three__WEBPACK_IMPORTED_MODULE_16__.Mesh(movieGeometry, movieMaterial);
  tvset.position.set(2.6, 2, 0.25);
  tvset.rotation.y = -90 * (Math.PI / 180);
  tvset.name = "tvset";
  tvset.iscale = 1;
  scene.add(tvset);
  /* VIDEO BUTTON */

  const vidButCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row-reverse',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.07,
    padding: 0.02,
    borderRadius: 0.11
  });
  vidButCon.position.set(2, 0.9, 0);
  vidButCon.rotation.y = -90 * (Math.PI / 180);
  scene.add(vidButCon);
  vidButCon.name = "tvsetButCon";
  vidButCon.iscale = 1;
  const buttonOptions = {
    width: 0.8,
    height: 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.075
  };
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFF00)
  };
  const videoButton = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(buttonOptions); //"Watch Video"

  videoButton.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].video.watch
  }));
  videoButton.name = "tvsetPlayButton";
  videoButton.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      playVideo();
    }
  });
  videoButton.setupState(hoveredSA);
  videoButton.setupState(idleSA);
  vidButCon.add(videoButton);
  /* PLAY - PAUS button */

  objRC.push(videoButton);
}

let textureLoader;
let boxTexture; //    textureLoader = new THREE.TextureLoader();

function addBasisSkyBox(num) {
  basisLoader.detectSupport(renderer);
  updateHUDTXT("Teleporting...");
  basisLoader.load('./assets/boxes/basis2/Equirectangular' + num + '.basis', boxTexture => {
    const rt = new three__WEBPACK_IMPORTED_MODULE_16__.WebGLCubeRenderTarget(boxTexture.image.height);
    rt.fromEquirectangularTexture(renderer, boxTexture);
    scene.background = rt.texture; //makeLoginPanel();

    setupRoom(num);
  });
}

w.addBasisSkyBox = addBasisSkyBox; // function addSkyBox(num) {
//   const boxWidth = 1;
//   const boxHeight = 1;
//   const boxDepth = 1;
//   const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     boxTexture = textureLoader.load(
//       './assets/boxes/'+num+'.jpg',
//       () => {
//         const rt = new THREE.WebGLCubeRenderTarget(boxTexture.image.height);
//         rt.fromEquirectangularTexture(renderer, boxTexture);
//         scene.background = rt.texture;
//         //makeLoginPanel();
//         //animate();
//       });
//     // makeLoginPanel()    
//     // animate();
// }
// w.addSkyBox = addSkyBox;
// function switchSkyTexture(num) {
//     // boxTexture = textureLoader.load(
//     //   './assets/boxes/8k/c/jpg/c1/'+num+'.jpg',
//     //   () => {
//     //     const rt = new THREE.WebGLCubeRenderTarget(boxTexture.image.height);
//     //     rt.fromEquirectangularTexture(renderer, boxTexture);
//     //     scene.background = rt.texture;
//     //   });
//      scene.background = cacheTextures
// }
// w.switchSkyTexture = switchSkyTexture;

let videoUserInitiated = false;
let videoPlaying = false;
let videoEnded = false;

function playVideo() {
  const hls = new (hls_js__WEBPACK_IMPORTED_MODULE_15___default())();
  let cD = window.cData; //let videoSrc = videosData

  let videoName = "";

  if (w.currentRoom == 7) {
    videoName = "intro";
  }

  if (w.currentRoom == 5) {
    videoName = "un";
  }

  let videoURL = videosData[videosData.findIndex(item => item.n === videoName)].url;
  /* first time user initiated action */

  if (videoUserInitiated == false) {
    console.log("videoURL, currentRoom", videoURL, w.currentRoom);
    console.log('Hls.isSupported(): ', hls_js__WEBPACK_IMPORTED_MODULE_15___default().isSupported());

    if (hls_js__WEBPACK_IMPORTED_MODULE_15___default().isSupported()) {
      hls.loadSource(videoURL);
      hls.attachMedia(video);
      hls.on((hls_js__WEBPACK_IMPORTED_MODULE_15___default().Events.MANIFEST_PARSED), function () {
        console.log('hls.on(Hls.Events.MANIFEST_PARSED - video.play()');
        video.play(); // pause

        scene.getObjectByName("tvsetPlayButton").children[1].set({
          content: cD[cLang].video.pause
        });
      });
      hls.on((hls_js__WEBPACK_IMPORTED_MODULE_15___default().Events.ERROR), function (e) {
        console.log('hls.on(Hls.Events.ERROR', e);
        sendReport(userID, "playVideo: error: " + e, videoURL);
      }); // hls.on(Hls.Events.FRAG_CHANGED, function() {
      //   console.log('hls.on(Hls.Events.FRAG_CHANGED');
      // });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoURL;
      video.addEventListener('loadedmetadata', function () {
        console.log('loadedmetadata - video.play()');
        video.play();
        sendReport(userID, "playVideo: loadedmetadata", videoURL);
      });
    } // video.setAttribute("poster", "./assets/media/poster.jpg"),
    // video.poster = "./assets/media/poster.jpg";


    video.setAttribute("loop", "false"), video.loop = false;
    video.setAttribute("muted", ""), video.setAttribute("playsinline", ""), video.setAttribute("webkit-playsinline", ""), video.setAttribute("crossorigin", "anonymous");
    var videoTexture = new three__WEBPACK_IMPORTED_MODULE_16__.VideoTexture(video);
    videoTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_16__.LinearFilter;
    videoTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_16__.LinearFilter;
    videoTexture.format = three__WEBPACK_IMPORTED_MODULE_16__.RGBFormat;
    videoTexture.crossOrigin = "anonymous";
    var tvset = scene.getObjectByName("tvset");
    var movieMaterial = new three__WEBPACK_IMPORTED_MODULE_16__.MeshBasicMaterial({
      map: videoTexture,
      overdraw: true,
      side: three__WEBPACK_IMPORTED_MODULE_16__.DoubleSide
    });
    tvset.material = movieMaterial;
    video.addEventListener('ended', function (e) {
      console.log('video ended -  - Playback has stopped because the end of the media was reached.', e); // again

      scene.getObjectByName("tvsetPlayButton").children[1].set({
        content: cD[cLang].video.again
      });
      sendReport(userID, "playVideo: ended", videoURL); //videoUserInitiated =  false;
    }, false);
    video.addEventListener('progress', function (e) {
      console.log('progress', e);
      console.log(e.target.currentTime, e.target.duration);
    }, false);
    video.addEventListener('playing', function (e) {
      console.log('playing', e); //console.log(e.target.currentTime,e.target.duration)

      videoEnded = e.target.ended;
    }, false);
    video.addEventListener('waiting', function (e) {
      console.log('waiting - Playback has stopped because of a temporary lack of data', e); //console.log(e.target.currentTime,e.target.duration)
    }, false);
    video.addEventListener('stalled', function (e) {
      console.log('stalled - The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.', e); //console.log(e.target.currentTime,e.target.duration)
    }, false);
    video.addEventListener('emptied', function (e) {
      console.log('emptied - The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.', e); //console.log(e.target.currentTime,e.target.duration)
    }, false);
    video.addEventListener('complete', function (e) {
      console.log('complete - The rendering of an OfflineAudioContext is terminated.', e); //console.log(e.target.currentTime,e.target.duration)
    }, false);
    w.video = video;
    videoUserInitiated = true;
  } else {
    console.log('videoUserInitiated: ', videoUserInitiated); // ThreeMeshUI.update();
    //r.children[2].set({ fontColor: new THREE.Color( 0xffffff ), content: '\n\nA: '+qtext.a[0] } );

    if (videoEnded == true || video.paused == true) {
      video.play();
      scene.getObjectByName("tvsetPlayButton").children[1].set({
        content: cD[cLang].video.pause
      });
      sendReport(userID, "playVideo: play", videoURL);
    } else {
      scene.getObjectByName("tvsetPlayButton").children[1].set({
        content: cD[cLang].video.play
      });
      video.pause();
      sendReport(userID, "playVideo: pause", videoURL);
    }
  }

  sendReport(userID, "playVideo", videoURL);
}
/* 

    LOGIN - FIRST STEPS (loginPanel)

                            */


var languages = ["english", "greek"];
var userData = {};
userData.animal = '';
userData.color = '';
userData.shape = '';
userData.language = '';
userData.profile = {};
window.userData = userData;
let userID = '';
window.userID = userID;

function changeUserLanguage() {
  let lid = userData.language;
  let d = window.cData[languages[lid]];
  cLang = languages[userData.language];
  console.log("changeUserLanguage", d);
  updateHUDTXT(window.cData[cLang].intro.welcome); // title

  scene.getObjectByName("langTitle").children[1].set({
    content: d.language.title
  }); // description

  scene.getObjectByName("langDesField").set({
    content: d.language.desc
  }); // ok button

  scene.getObjectByName("langConfirmB").children[1].set({
    content: d.buttons.ok.label
  });
  var err = false; // change

  for (let i = 0; i < 2; i++) {
    let lb = scene.getObjectByName("lang_b_" + (i + 1) + "_language");

    if (i != lid) {
      lb.children[1].scale.set(0.7, 0.7, 0.7);
      lb.children[0].visible = false;
    } else {
      lb.children[1].scale.set(1.1, 1.1, 1.1);
      lb.children[0].visible = true; //cLang = languages[]
    }
  }

  if (!err) {
    let ff = scene.getObjectByName("langConfirmB");
    ff.visible = true;
    ff.scale.set(1, 1, 1);
  } // play select sound


  sounds.select.play(); //sounds.tap.play();
}

function updateUserData() {
  console.log("updateUserData", JSON.stringify(userData)); //scene.getObjectByName("loginDesField").set({ fontColor: new THREE.Color(0xffffff), content: String("" + JSON.stringify(userData) + "") });

  var err = false; // making icon zoomed and stroke outline removed if selected/not selected

  Object.keys(userData).forEach(key => {
    console.log(key, userData[key]);

    if (key && userData[key] !== '') {
      for (let f = 1; f < 5; f++) {
        let bf = scene.getObjectByName("b" + f + "" + key);

        if (bf) {
          if (userData[key] != f - 1) {
            bf.children[1].scale.set(0.7, 0.7, 0.7);
            bf.children[0].visible = false;
          } else {
            bf.children[1].scale.set(1.1, 1.1, 1.1);
            bf.children[0].visible = true;
          }
        }
      }
    }

    if (userData[key] === '') {
      err = true;
    }
  });

  if (!err) {
    let ff = scene.getObjectByName("confirmB");
    ff.visible = true;
    ff.scale.set(1, 1, 1);
  } // play select sound


  sounds.select.play(); //sounds.tap.play();
}

let loginPanelStatus = false;

function hideLoginPanel() {
  console.log("hideLoginPanel");
  let r = scene.getObjectByName("conLogin");
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(r.position, {
    y: 5,
    duration: 1.5,
    delay: 0,
    ease: "elastic.inOut(1, 0.75)",
    onComplete: function () {
      r.visible = false;
      r.scale.set(0, 0, 0);
      r.iscale = 0;
      introStart();
    }
  });
  sounds.out.play();
}

w.hideLoginPanel = hideLoginPanel;

function registerUser() {
  console.log("registerUser");
  var err = false;
  Object.keys(userData).forEach(key => {
    console.log(key, userData[key]);

    if (userData[key] === '') {
      err = true;
    }
  });

  if (!err) {
    let userDataStr = "/animal/" + userData.animal + "/color/" + userData.color + "/shape/" + userData.shape;
    loginApi(apiURL, "/api/studentlogin" + userDataStr, "GET").then(value => console.log("then value", value)).catch(e => {
      scene.getObjectByName("loginTitle").children[1].set({
        fontSize: 0.075,
        fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000),
        content: String("ERROR")
      });
      scene.getObjectByName("loginDesField").set({
        fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000),
        content: String(e.message)
      }); //let erroStr = { name:e.name, filename: e.fileName, lineNumber: e.lineNumer, columnNumber: e.columnNumber 

      sendReport("init: " + userDataStr, "loginApi -> registerUser", "e.message: " + e.message); //console.log('e.stack', e.stack);
      //console.trace(e);
    });
  }
}
/* Lang Panel */


function makeContent() {
  // load new config
  //curConf = contentData[id].path;
  //changeConfig();
  // hide lang window
  //gsap.to(scene.getObjectByName("conLang").position, { y: -3, z:"+=0.2", duration: 1.5, delay: 0, ease: "power2.out"})
  let cl = scene.getObjectByName("conLang");
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(cl.scale, {
    x: 0,
    y: 0,
    z: 0,
    duration: 0.5,
    delay: 0,
    ease: "power2.out",
    onComplete: function () {
      cl.visible = false;
      cl.scale.set(0, 0, 0);
      cl.iscale = 0;
      sounds.out.play();
      makeLoginPanel();
    }
  });
}
/* 

  Language Selector - conLang

                          */


function makeLangPanel() {
  /* buttons attributes and options */
  if (!scene.getObjectByName("conLang")) {
    let cD = window.cData;
    const selSA = {
      offset: 0.04,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000),
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
    };
    const hoveredSA = {
      state: "hovered",
      attributes: {
        offset: 0.035,
        backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
        backgroundOpacity: 1,
        fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
      },
      onSet: () => {
        sounds.tap.play();
      }
    };
    const idleSA = {
      state: "idle",
      attributes: {
        offset: 0.035,
        backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
        backgroundOpacity: 0.3,
        fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
      }
    };
    const butOpt = {
      width: 0.2,
      height: 0.2,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 0.03,
      borderWidth: 0.005,
      margin: 0.02,
      padding: 0.015,
      borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFFFF),
      borderOpacity: 0,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFFFF),
      backgroundOpacity: 0
    };
    /* user input */

    const conLang = new three__WEBPACK_IMPORTED_MODULE_16__.Group();
    conLang.position.set(0, 1.3, -1.7); //conLang.rotation.x = -0.01;

    scene.add(conLang);
    conLang.name = "conLang";
    conLang.iscale = 1; // title

    const textPanel = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
      fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
      fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      width: 1.2,
      height: 0.95,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000),
      backgroundOpacity: 0.5,
      borderRadius: 0.1
    });
    textPanel.name = "textPanel";
    textPanel.position.set(0, 0, 0);
    conLang.add(textPanel);
    const langTitle = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
      width: 1,
      height: 0.2,
      justifyContent: 'center',
      fontSize: 0.1,
      padding: 0,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00),
      backgroundOpacity: 0
    }).add( // Lang
    new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
      content: cD[cLang].language.title
    }));
    langTitle.name = "langTitle";
    const langDesField = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
      content: cD[cLang].language.desc
    });
    langDesField.name = "langDesField";
    const textField = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
      width: 1.2,
      height: 0.2,
      fontSize: 0.07,
      padding: 0.01,
      backgroundOpacity: 0
    }).add(langDesField); // 2 flags
    // ------------------------

    const langButCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
      justifyContent: 'center',
      alignContent: 'center',
      contentDirection: 'row',
      fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
      fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      fontSize: 0.06,
      padding: 0,
      margin: 0,
      borderRadius: 0.11,
      backgroundOpacity: 0
    });
    langButCon.name = "langButCon";
    const b1 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
    const b2 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
    b1.name = "lang_b_1_language";
    b2.name = "lang_b_2_language";
    const lo = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader();
    lo.load("./assets/flags/uk.png", tx => {
      b1.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
        height: 0.15,
        width: 0.15,
        backgroundTexture: tx
      }));
    });
    b1.setupState({
      state: "selected",
      attributes: selSA,
      onSet: () => {
        console.log("Flaga 1");
        userData.language = 0; //updateUserData()

        changeUserLanguage();
      }
    });
    lo.load("./assets/flags/gr.png", tx => {
      b2.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
        height: 0.15,
        width: 0.15,
        backgroundTexture: tx
      }));
    });
    b2.setupState({
      state: "selected",
      attributes: selSA,
      onSet: () => {
        console.log("Flaga 2");
        userData.language = 1; //updateUserData()

        changeUserLanguage();
      }
    });
    b1.setupState(hoveredSA);
    b1.setupState(idleSA);
    b2.setupState(hoveredSA);
    b2.setupState(idleSA);
    objRC.push(b1);
    objRC.push(b2);
    langButCon.add(b1, b2); // confirmation button

    const selSA2 = {
      offset: 0.04,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFEE00),
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000)
    };
    const butOpt2 = {
      width: 0.4,
      height: 0.15,
      justifyContent: 'center',
      alignContent: 'center',
      offset: 0.05,
      margin: 0.08,
      borderRadius: 0.075
    };
    const langConfirmB = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt2);
    langConfirmB.name = "langConfirmB";
    langConfirmB.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
      content: cD[cLang].buttons.ok.label
    }));
    langConfirmB.setupState({
      state: "selected",
      attributes: selSA2,
      onSet: () => {
        console.log("langConfirmB");
        makeContent();
      }
    });
    langConfirmB.setupState(hoveredSA);
    langConfirmB.setupState(idleSA);
    langConfirmB.visible = false;
    langConfirmB.scale.set(0, 0, 0);
    objRC.push(langConfirmB);
    textPanel.add(langTitle, textField, langButCon, langConfirmB);
  } else {
    console.log("! - conLong - already created");
  } //report


  sendReport("init", "makeLangPanel", new Date().getTime());
}

w.makeLangPanel = makeLangPanel;

function iconTexture(p) {
  const texture = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader().load(p);
  return texture;
}

function makeLoginPanel() {
  //console.log(window.cData,cLang)
  let cD = window.cData;
  /* load animals textures */

  /* buttons attributes and options */

  const selSA = {
    offset: 0.04,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const butOpt = {
    width: 0.2,
    height: 0.2,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 0.03,
    borderWidth: 0.005,
    margin: 0.02,
    padding: 0.015,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFFFF),
    borderOpacity: 0,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFFFF),
    backgroundOpacity: 0
  };
  /* user input */

  const conLogin = new three__WEBPACK_IMPORTED_MODULE_16__.Group();
  conLogin.position.set(0, 1.3, -1.7); //conLogin.rotation.x = -0.01;

  scene.add(conLogin);
  conLogin.name = "conLogin";
  conLogin.iscale = 1; // title

  const textPanel = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    width: 1.5,
    height: 1.4,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000),
    backgroundOpacity: 1
  });
  textPanel.name = "textPanel";
  textPanel.position.set(0, 0, 0);
  conLogin.add(textPanel);
  const loginTitle = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 1,
    height: 0.2,
    justifyContent: 'center',
    fontSize: 0.1,
    padding: 0,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00),
    backgroundOpacity: 0
  }).add( // Login
  new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].login.title
  }));
  loginTitle.name = "loginTitle"; // login status
  // Introduce the animal, color and shape from your card:

  const loginDesField = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].login.desc
  });
  loginDesField.name = "loginDesField";
  const textField = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 1.2,
    height: 0.2,
    fontSize: 0.07,
    padding: 0.01,
    backgroundOpacity: 0
  }).add(loginDesField); // logout button
  // animals buttons
  // ------------------------

  const animalsButCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.06,
    padding: 0,
    margin: 0,
    borderRadius: 0.11
  });
  animalsButCon.name = "animalsButCon";
  const b1 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b2 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b3 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b4 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  b1.name = "b1animal";
  b2.name = "b2animal";
  b3.name = "b3animal";
  b4.name = "b4animal";
  const lo = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader();
  lo.load("./assets/animals/1.png", tx => {
    b1.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b1.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Animal 1");
      userData.animal = 0;
      updateUserData();
    }
  });
  lo.load("./assets/animals/2.png", tx => {
    b2.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b2.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Animal 2");
      userData.animal = 1;
      updateUserData();
    }
  });
  lo.load("./assets/animals/3.png", tx => {
    b3.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b3.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Animal 3");
      userData.animal = 2;
      updateUserData();
    }
  });
  lo.load("./assets/animals/4.png", tx => {
    b4.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b4.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Animal 4");
      userData.animal = 3;
      updateUserData();
    }
  });
  b1.setupState(hoveredSA);
  b1.setupState(idleSA);
  b2.setupState(hoveredSA);
  b2.setupState(idleSA);
  b3.setupState(hoveredSA);
  b3.setupState(idleSA);
  b4.setupState(hoveredSA);
  b4.setupState(idleSA);
  objRC.push(b1);
  objRC.push(b2);
  objRC.push(b3);
  objRC.push(b4);
  animalsButCon.add(b1, b2, b3, b4); // colors buttons
  // ------------------------

  const colorsButCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.06,
    padding: 0,
    margin: 0,
    borderRadius: 0.11
  });
  colorsButCon.name = "colorsButCon";
  const b1col = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b2col = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b3col = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b4col = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  b1col.name = "b1color";
  b2col.name = "b2color";
  b3col.name = "b3color";
  b4col.name = "b4color";
  const loColors = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader();
  loColors.load("./assets/colors/1.png", tx => {
    b1col.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b1col.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Color 1");
      userData.color = 0;
      updateUserData();
    }
  });
  loColors.load("./assets/colors/2.png", tx => {
    b2col.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b2col.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Color 2");
      userData.color = 1;
      updateUserData();
    }
  });
  loColors.load("./assets/colors/3.png", tx => {
    b3col.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b3col.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Color 3");
      userData.color = 2;
      updateUserData();
    }
  });
  loColors.load("./assets/colors/4.png", tx => {
    b4col.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b4col.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Color 4");
      userData.color = 3;
      updateUserData();
    }
  });
  b1col.setupState(hoveredSA);
  b1col.setupState(idleSA);
  b2col.setupState(hoveredSA);
  b2col.setupState(idleSA);
  b3col.setupState(hoveredSA);
  b3col.setupState(idleSA);
  b4col.setupState(hoveredSA);
  b4col.setupState(idleSA);
  objRC.push(b1col);
  objRC.push(b2col);
  objRC.push(b3col);
  objRC.push(b4col);
  colorsButCon.add(b1col, b2col, b3col, b4col); // shape buttons
  // ------------------------

  const shapeButCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.06,
    padding: 0,
    margin: 0,
    borderRadius: 0.11
  });
  shapeButCon.name = "shapeButCon";
  const b1shapes = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b2shapes = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b3shapes = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  const b4shapes = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  b1shapes.name = "b1shape";
  b2shapes.name = "b2shape";
  b3shapes.name = "b3shape";
  b4shapes.name = "b4shape";
  const loShapes = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader();
  loShapes.load("./assets/shapes/1.png", tx => {
    b1shapes.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b1shapes.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Shape 1");
      userData.shape = 0;
      updateUserData();
    }
  });
  loShapes.load("./assets/shapes/2.png", tx => {
    b2shapes.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b2shapes.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Shape 2");
      userData.shape = 1;
      updateUserData();
    }
  });
  loShapes.load("./assets/shapes/3.png", tx => {
    b3shapes.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b3shapes.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Shape 3");
      userData.shape = 2;
      updateUserData();
    }
  });
  loShapes.load("./assets/shapes/4.png", tx => {
    b4shapes.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock({
      height: 0.15,
      width: 0.15,
      backgroundTexture: tx
    }));
  });
  b4shapes.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Shape 4");
      userData.shape = 3;
      updateUserData();
    }
  });
  b1shapes.setupState(hoveredSA);
  b1shapes.setupState(idleSA);
  b2shapes.setupState(hoveredSA);
  b2shapes.setupState(idleSA);
  b3shapes.setupState(hoveredSA);
  b3shapes.setupState(idleSA);
  b4shapes.setupState(hoveredSA);
  b4shapes.setupState(idleSA);
  objRC.push(b1shapes);
  objRC.push(b2shapes);
  objRC.push(b3shapes);
  objRC.push(b4shapes);
  shapeButCon.add(b1shapes, b2shapes, b3shapes, b4shapes); // confirmation button

  const selSA2 = {
    offset: 0.04,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFEE00),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000)
  };
  const butOpt2 = {
    width: 0.4,
    height: 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.075
  };
  const confirmB = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt2);
  confirmB.name = "confirmB";
  confirmB.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].buttons.login.label
  }));
  confirmB.setupState({
    state: "selected",
    attributes: selSA2,
    onSet: () => {
      //console.log("registerUser")
      registerUser(userData);
    }
  });
  confirmB.setupState(hoveredSA);
  confirmB.setupState(idleSA);
  confirmB.visible = false;
  confirmB.scale.set(0, 0, 0); //buttonContainer.add( confirmB );
  //objRC.push(confirmB );

  objRC.push(confirmB);
  textPanel.add(loginTitle, textField, animalsButCon, colorsButCon, shapeButCon, confirmB); //animate();
}

w.makeLoginPanel = makeLoginPanel;

function makeClock() {
  let cD = window.cData;
  let count = 0;
  const container = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 2.3,
    height: 1,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"]
  });
  container.position.set(0, 4.6, -4);
  container.rotation.x = 0.06;
  container.name = "CLOCK";
  scene.add(container); // onAfterUpdate can be set on any component ( Text, Block... ),
  // and get called after any update to the component.

  container.onAfterUpdate = function () {
    this.frame.layers.set(count % 2);
  }; //


  const text = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].clock.time + "\n",
    fontSize: 0.3
  });
  text.name = "CLOCK_TEXT";
  const counter = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: "",
    fontSize: 0.2,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  });
  counter.name = "CLOCK_COUNTER";
  container.add(text, counter); // 
  // triggers updates to the component to test onAfterUpdate
  //

  w.clockInterval = setInterval(() => {
    const ts = Math.floor(new Date().getTime() / 1000);
    var myDate = new Date(ts * 1000); //var hms = myDate.toGMTString()+" "+myDate.toLocaleString()

    var hms = myDate.toLocaleString();
    counter.set({
      content: String(hms)
    });
  }, 500); // clock comes from the wall

  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.from(scene.getObjectByName("CLOCK").position, {
    z: 3,
    duration: 1,
    delay: 0,
    ease: "power2.out",
    onComplete: function () {//makeKeyboard()
    }
  }); //makeKeyboard();
}

;
w.makeClock = makeClock;
/* Load 3D GLB model */
//-------------------------------------

function loadModel(modelFile, modelName, position, scale, animPosition, speed, rotation, observe) {
  modelsArr.push(modelName);
  var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
  loader.load(modelFile, function (gltf) {
    var ref = gltf.scene;
    ref.traverse(function (o) {
      if (o.isMesh) o.castShadow = true;
    });
    console.log('animation check: ', gltf.animations.length);
    ref.position.x = position.x;
    ref.position.y = position.y;
    ref.position.z = position.z;
    ref.rotation.x = rotation.x;
    ref.rotation.y = rotation.y;
    ref.rotation.z = rotation.z;
    ref.scale.set(scale.x, scale.y, scale.z);
    ref.castShadow = true;
    ref.receiveShadow = true;
    ref.name = modelName;
    ref.speed = speed.speed;
    ref.iscale = scale.x;
    w.scene.add(ref);
    checkReady();

    if (observe) {
      objRC.push(ref);
    }
  }, function (xhr) {}, function (error) {
    console.log(error);
  });
}

w.loadModel = loadModel;
/*

    Start Quiz

                    */

let quizTimeStart = 0;
let quizTimeEnd = 0;
let quizTimeTotal = 0;
let quizStarted = false;
let quizTimeTotalHMS = "00:00:00";

function startQuiz() {
  let cD = window.cData;

  if (quizStarted == false) {
    gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(scene.getObjectByName("HelloTXTFront").position, {
      y: -15,
      duration: 1.5,
      delay: 0.1,
      ease: "elastic.in(1, 1)"
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(scene.getObjectByName("buttonSTART").position, {
      y: -15,
      duration: 1.5,
      delay: 0,
      ease: "elastic.in(1, 1)",
      onComplete: function () {
        createQuestionWindow(0);
        updateQuestionWindow(0);
        addABC();
        backQuestionsTransition();
        updateHUDTXT("1/" + cD[cLang].questions.length);
      }
    });
    quizStarted = true;
    quizTimeStart = new Date().getTime();
    answerTimeStart = new Date().getTime();
    sendReport(userID, "startQuiz", answerTimeStart);
  }
}
/* Welcome Message UI */
//-------------------------------------

/* Hello Screen - intro.title */


function makeHelloScreen() {
  let cD = window.cData;
  const container = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 1.5,
    height: 0.7,
    padding: 0.08,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"]
  });
  container.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].intro.title,
    fontSize: 0.12,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  }), new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].intro.desc,
    fontSize: 0.06
  }));
  container.position.set(0, 1.7, -1.8); //container.rotation.y = 0;

  container.name = "HelloTXTFront";
  container.iscale = 1;
  scene.add(container); // This is typically done in the render loop :

  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.from(scene.getObjectByName("HelloTXTFront").position, {
    y: -10,
    duration: 2,
    delay: 1,
    ease: "elastic.out(1, 0.90)"
  });
  makeStartButton();
  three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].update();
}

function raycast() {
  return objRC.reduce((closestIntersection, obj) => {
    const intersection = raycaster.intersectObject(obj, true);
    if (!intersection[0]) return closestIntersection;

    if (!closestIntersection || intersection[0].distance < closestIntersection.distance) {
      intersection[0].object = obj; //console.log(intersection[0].object.name)

      return intersection[0];
    } else {
      return closestIntersection;
    }

    ;
  }, null);
}

;
var actionStepActive = false;

function showHello() {
  actionStepActive = true;
  console.log("showHello");
  let tl = gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.timeline({
    delay: 0,
    repeat: 0,
    repeatDelay: 0
  });
  tl.to(scene.getObjectByName("HelloTXTFront").position, {
    y: 6.3,
    duration: 2,
    delay: 0
  }, "+=0").to(scene.getObjectByName("HelloTXTBack").position, {
    y: 6.3,
    duration: 2,
    delay: 0
  }, "<").to(scene.getObjectByName("buttonSTART").position, {
    y: -1,
    duration: 2,
    delay: 0,
    onComplete: function () {
      console.log("completed"); //makeClock();
    }
  }, "<");
}

function updateButtons() {
  let intersect;

  if (renderer.xr.isPresenting) {
    vrControl.setFromController(0, raycaster.ray);
    intersect = raycast(); // Position the little white dot at the end of the controller pointing ray

    if (intersect) vrControl.setPointerAt(0, intersect.point);
  } else if (mouse.x !== null && mouse.y !== null) {
    raycaster.setFromCamera(mouse, camera);
    intersect = raycast();
  }

  ;

  if (intersect && intersect.object.isUI) {
    if (selectState) {
      intersect.object.setState('selected'); //console.log("S")
    } else {
      intersect.object.setState('hovered'); //console.log("H")
      //iddleTime+=1
    }

    ;
  }

  ;

  if (intersect && intersect.object.isUI2) {
    if (selectState) {
      //intersect.object.setState('selected');
      console.log("ON");
      intersect.object.state = "clicked";

      if (intersect.object.data) {
        console.log(intersect.object.data.name);
        updateHUDTXT("" + intersect.object.data.name);
        scene.getObjectByName("endScreen").children[1].set({
          fontSize: 0.1,
          content: intersect.object.data.name
        });
        scene.getObjectByName("endScreen").children[2].set({
          fontSize: 0.08,
          content: "\n\n" + intersect.object.data.description
        });
      }
    } else {
      //intersect.object.setState('hovered');
      console.log("OFF");
      intersect.object.state = "hover"; //iddleTime+=1
    }

    ;
  }

  ;
  objRC.forEach(obj => {
    if ((!intersect || obj !== intersect.object) && obj.isUI) {
      obj.setState('idle');
    }

    ;
  });

  if (iddleTime > 80 && actionStepActive == false) {
    showHello(); //iddleTime = 0;
  } //console.log(iddleTime)

}

;

function makeStartButton() {
  let cD = window.cData;
  const buttonContainer = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row-reverse',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.07,
    padding: 0.02,
    borderRadius: 0.11
  });
  buttonContainer.position.set(0, 1.2, -1.8);
  buttonContainer.rotation.x = -0.55;
  scene.add(buttonContainer);
  buttonContainer.name = "buttonSTART";
  buttonContainer.iscale = 1;
  const buttonOptions = {
    width: 0.4,
    height: 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.075
  };
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const startB = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(buttonOptions);
  startB.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].buttons.start.label
  }));
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  startB.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("onSet");
      startQuiz();
    }
  });
  startB.setupState(hoveredSA);
  startB.setupState(idleSA);
  buttonContainer.add(startB); //objRC.push(startB );

  objRC.push(startB); // buttons comes from the bottom

  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.from(scene.getObjectByName("buttonSTART").position, {
    y: -6,
    duration: 2,
    delay: 1.5,
    ease: "elastic.out(1, 0.75)"
  });
}

;

function introStart() {
  makeHelloScreen();
  makeClock(); //created invisible

  createEndScreen(); // make video player

  makeTV(); //addMenu();
}

let introAnimated = false;

function introAnimate() {
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.to(scene.getObjectByName("HelloTXTFront").position, {
    y: 1.3,
    duration: 2,
    delay: 0.5
  });
}
/* Analytics */

/*# curl -X 'POST' \
#  'http://0.0.0.0:3456/report' \
#  -H 'accept: application/json' \
#  -H 'Content-Type: application/json' \
#  -d '{
#  "uid": "uid123123",
#  "event": "event this is",
#  "data": "this is data",
#  "navigator": "navigator"
# }'*/


async function sendReport(uid, event, data) {
  var _navigator = {};

  for (var i in navigator) _navigator[i] = navigator[i];

  let navi = JSON.stringify(_navigator);
  let url = "https://workwork.fun:3456/report";
  console.log("sendReport", uid, event, data);
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      uid: uid,
      event: event,
      data: data,
      navigator: navi,
      version: "V.2021-12-08T17:09:33.680Z"
    })
  });
  const json = await resp.json();
  console.log(json);
}

w.sendReport = sendReport;

async function registerUserAnswer(questionNumber, time, success, studentId) {
  console.log("registerUserAnswer", questionNumber, time, success, studentId);
  /*
  
      // /api/student/quizanswer/{studentId}
  
  
      {
          "questionNumber": "1",
          "time": "11",
          "success": "false"
      }
  
  */
  //(async () => {

  const resp = await fetch(apiURL + '/api/student/quizanswer/' + studentId, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      questionNumber: questionNumber,
      time: time,
      success: success
    })
  });
  const json = await resp.json();
  console.log(json); //})();
}
/* 


  Quiz and answering
  -------------------

                                            */


function updateAnswer(num) {
  // check if already answered
  // console.log("updateAnswer", num, "quizSession.length:", quizSession.length);
  let delayTime = 0;
  let success;
  let cD = window.cData; //console.log(quizSessionPos,quizSession.length)

  if (quizSessionPos <= quizSession.length && isMoving == false) {
    isMoving = true;
    console.log("first time answer");
    let correct = currentQuestion.c;

    if (num == correct) {
      console.log("CORRECT!");
      delayTime = 0.1;
      quizSession.push(1);
      success = true;
      sounds.fine.play();
      updateHUD("CORRECT!");
    } else {
      console.log("WRONG ANSWER!");
      delayTime = 2.5;
      quizSession.push(0);
      success = false;
      sounds.fail.play();
      updateHUD("WRONG!");
    } // change the colour of answer to red or green if correct;


    let r = scene.getObjectByName("qContainer"); // red

    r.children[num + 2].set({
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000)
    }); // green

    r.children[correct + 2].set({
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x00ff00)
    }); // send answer to API

    let time = new Date().getTime() - answerTimeStart;
    registerUserAnswer(quizSessionPos, time, success, userData.profile._id); // move question block up

    quizSessionPos += 1;
    let tl = gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.timeline({
      delay: 0,
      repeat: 0,
      repeatDelay: 0
    });
    tl.to(r.position, {
      y: -10,
      duration: 1.25,
      delay: delayTime,
      ease: "power3.in",
      onComplete: function () {
        console.log("completed transition");
        answerTimeStart = new Date().getTime();
        updateHUDTXT(quizSessionPos + "/" + cD[cLang].questions.length);

        if (quizSessionPos < cD[cLang].questions.length) {
          updateQuestionWindow(quizSessionPos);
          backQuestionsTransition();
        } else {
          console.log("provide the ENDSCREEN");
          showResults();
          sounds.win.play();
        }
      }
    }, "+=0"); // create new question
    // move back
  } else {
    console.log("wait a bit!!!!");
  }
}

w.quizSession = quizSession;

function backQuestionsTransition() {
  let r = scene.getObjectByName("qContainer");
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.fromTo(r.position, {
    y: 10
  }, {
    y: 1.7,
    duration: 1.25,
    delay: 0.1,
    ease: "power3.out",
    onComplete: function () {
      isMoving = false;
    }
  });
}

function updateQuestionWindow(num) {
  let qNum = num;
  let cD = window.cData;
  let qtext = cD[cLang].questions[qNum];
  currentQuestion = qtext;
  let r = scene.getObjectByName("qContainer");
  r.children[1].set({
    content: qtext.q
  });
  r.children[2].set({
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff),
    content: '\n\nA: ' + qtext.a[0]
  });
  r.children[3].set({
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff),
    content: '\n\nB: ' + qtext.a[1]
  });
  r.children[4].set({
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff),
    content: '\n\nC: ' + qtext.a[2]
  });
  quizSessionPos = num;
}

w.updateQuestionWindow = updateQuestionWindow;

function createEndScreen() {
  let cD = window.cData;
  const container = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 1.5,
    height: 0.8,
    padding: 0.05,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    borderRadius: 0.1
  });
  scene.add(container);
  container.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].outro.title,
    fontSize: 0.18,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  }), new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].outro.desc,
    fontSize: 0.12
  }));
  container.position.set(0, 1.7, -1.6); //container.rotation.y = 0;

  container.name = "endScreen";
  container.iscale = 0;
  container.visible = false;
  container.scale.set(0, 0, 0);
  three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].update();
}

w.createEndScreen = createEndScreen;

function showResults() {
  let cD = window.cData;
  let f = scene.getObjectByName("buttonsABC");
  f.visible = false;
  f.scale.set(0, 0, 0);
  f.iscale = 0;
  let r = scene.getObjectByName("endScreen");
  r.visible = true;
  r.scale.set(1, 1, 1);
  r.iscale = 1; // let quizTimeStart = 0;

  quizTimeEnd = new Date().getTime();
  quizTimeTotal = quizTimeEnd - quizTimeStart;
  quizTimeTotalHMS = new Date(quizTimeTotal).toISOString().substr(11, 8);
  console.log("quizTimeTotal: ", quizTimeTotal);
  console.log("quizTimeTotalHMS: ", quizTimeTotalHMS); // message on the Result screen

  let correctAnswers = quizSession.reduce((a, b) => a + b);
  let percentage = correctAnswers / cD[cLang].questions.length;
  let resultTitle = Math.floor(percentage * 100) + "% " + cD[cLang].msg.correct;
  let resultMessage = "\n\n " + cD[cLang].msg.time + ": \n" + quizTimeTotalHMS + ".";
  r.children[1].set({
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00),
    content: resultTitle
  });
  r.children[2].set({
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff),
    content: resultMessage
  });
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.fromTo(r.position, {
    y: 15
  }, {
    y: 1.7,
    duration: 1.25,
    delay: 0.1,
    ease: "power3.out",
    onComplete: function () {
      isMoving = false;
      emblemsUpdate();
    }
  });
  sendReport(userID, "showResults", JSON.stringify(userData));
}

function createQuestionWindow(num) {
  let cD = window.cData;
  let qNum = num;
  let qtext = cD[cLang].questions[qNum];
  console.log("qtext", qtext);
  /* qCon - Questions Container */

  const qCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 2,
    height: 0.95,
    padding: 0.12,
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    alignContent: 'left',
    justifyContent: 'center',
    //'start', 'center' or 'end'
    interLine: 0.01
  });
  qCon.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: qtext.q,
    fontSize: 0.075,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  }), new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: '\n\nA: ' + qtext.a[0],
    fontSize: 0.075,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
  }), new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: '\n\nB: ' + qtext.a[1],
    fontSize: 0.075,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
  }), new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: '\n\nC: ' + qtext.a[2],
    fontSize: 0.075,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
  }));
  qCon.position.set(0, 1.7, -1.8); //qCon.rotation.y = 0;

  qCon.name = "qContainer";
  qCon.iscale = 1;
  scene.add(qCon);
  three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].update();
}

w.createQuestionWindow = createQuestionWindow;
/* Menu HUD */

function hideHUDMenu() {
  if (scene.getObjectByName("menuHUD")) {
    if (scene.getObjectByName("menuHUD").visible == true) {
      scene.getObjectByName("menuHUD").scale.set(0, 0, 0);
      scene.getObjectByName("menuHUD").visible = false;
    } else {
      scene.getObjectByName("menuHUD").scale.set(1, 1, 1);
      scene.getObjectByName("menuHUD").visible = true;
    }
  }
}

function addMenu() {
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  let menuD = [{
    id: "0",
    l: "Quizz: 0%"
  }, {
    id: "1",
    l: "Video 1: 0%"
  }, {
    id: "2",
    l: "Video 2: 0%"
  }, {
    id: "3",
    l: "Exploration: 0%"
  }, {
    id: "4",
    l: "Progress: 0%"
  }];
  let scaleF = 0.7;
  let blockOpts = {
    width: 0.60 * scaleF,
    height: 0.73 * scaleF,
    padding: 0.03 * scaleF,
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    alignContent: 'right',
    justifyContent: 'center',
    //'start', 'center' or 'end'
    interLine: 0.01,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255,200,255)"),
    backgroundOpacity: 0.1
  };
  let blockOptions = {
    width: 0.55 * scaleF,
    height: 0.55 * scaleF,
    padding: 0.01 * scaleF,
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    alignContent: 'left',
    justifyContent: 'center',
    //'start', 'center' or 'end'
    interLine: 0.01,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255,255,255)"),
    backgroundOpacity: 0.1
  };
  let blockOptions2 = {
    width: 0.5 * scaleF,
    height: 0.1 * scaleF,
    padding: 0.025 * scaleF,
    fontFamily: (_assets_fonts_Roboto_msdf_json__WEBPACK_IMPORTED_MODULE_13___default()),
    fontTexture: _assets_fonts_Roboto_msdf_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    alignContent: 'left',
    justifyContent: 'center',
    //'start', 'center' or 'end'
    interLine: 0.01,
    borderRadius: 0.01,
    borderWidth: 0.005,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgba(34,34,34)"),
    borderOpacity: 0.01,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255,255,255)"),
    backgroundOpacity: 0.1
  };
  let blockOptions3 = {
    width: 0.2 * scaleF,
    height: 0.1 * scaleF,
    padding: 0.025 * scaleF,
    fontFamily: (_assets_fonts_Roboto_msdf_json__WEBPACK_IMPORTED_MODULE_13___default()),
    fontTexture: _assets_fonts_Roboto_msdf_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    alignContent: 'left',
    justifyContent: 'center',
    //'start', 'center' or 'end'
    interLine: 0.01,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgba(34,34,34)"),
    borderOpacity: 0,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255,255,255)"),
    backgroundOpacity: 0.1
  };
  const sCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(blockOpts); //sCon.name = "menuScon";

  const tCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock(blockOptions3);
  const text1 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    // Close
    content: "Close",
    fontSize: 0.035 * scaleF,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xFFFACD)
  });
  const text2 = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    // X
    content: " X",
    fontSize: 0.035 * scaleF,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  });
  tCon.add(text1);
  tCon.add(text2);
  sCon.add(tCon);
  tCon.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("Menu");
      hideHUDMenu(); //updateAnswer(0)
    }
  });
  tCon.setupState(hoveredSA);
  tCon.setupState(idleSA);
  objRC.push(tCon); //

  sCon.position.set(0, 1.5, 0); // add sCon to the scene

  scene.add(sCon);
  const qCon = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].InlineBlock(blockOptions);
  qCon.name = "menuCon";

  for (let i = 0; i < menuD.length; i++) {
    const r = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(blockOptions2);
    r.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
      content: i + '. ' + menuD[i].l + "",
      fontSize: 0.035 * scaleF,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }));
    r.name = "bu_" + i;
    r.setupState({
      state: "selected",
      attributes: selSA,
      onSet: () => {
        console.log("answer", i); //updateAnswer(0)
      }
    });
    r.setupState(hoveredSA);
    r.setupState(idleSA);
    objRC.push(r);
    qCon.add(r);
  }

  sCon.add(qCon);
  sCon.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: "" + "V.2021-12-08T17:09:33.680Z",
    fontSize: 0.03 * scaleF,
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xbbbbbb)
  }));
  sCon.eulerOrder = 'ZYX';
  sCon.name = "menuHUD";
  sendReport("init", "addMenu", new Date().getTime());
  hideHUDMenu();
}

w.addMenu = addMenu;
/* HUD */

function addHUD() {
  // a block with text
  let cD = window.cData;
  /* HELLO - INTRO UI */

  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  /* Hello Front */

  const cnF = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    width: 0.5,
    height: 0.2,
    padding: 0.03,
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 0.06,
    borderWidth: 0,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x000000),
    backgroundOpacity: 0,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
  });
  cnF.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: cD[cLang].intro.welcome,
    fontSize: 0.045
  }));
  cnF.position.set(0, 1.5, -1.8);
  cnF.name = "HUDFront";
  cnF.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      hideHUDMenu();
    }
  });
  cnF.setupState(hoveredSA);
  cnF.setupState(idleSA);
  objRC.push(cnF);
  scene.add(cnF);
  cnF.eulerOrder = 'ZYX';
  camera.eulerOrder = 'YXZ';
  updateHUDTXT("ENTER VR"); // scene.add(cnB);

  /* Front and Back all together arrive from the bottom */
  //gsap.from(scene.getObjectByName("HelloTXTFront").position, { y: -1, duration: 2, delay: 1, ease: "elastic.out(1, 0.90)" })
  //gsap.from(scene.getObjectByName("HelloTXTBack").position, { y: -1, duration: 2, delay: 1, ease: "elastic.out(1, 0.90)" })  
  // add to hud (?) buttons
  //
}

w.addHUD = addHUD;

function updateHUDTXT(msg, fontSize) {
  if (scene.getObjectByName("HUDFront")) {
    var r = scene.getObjectByName("HUDFront");
    r.children[1].set({
      content: String(msg)
    });

    if (fontSize) {
      r.children[1].set({
        fontSize: fontSize
      });
    }
  }
}

function updateHUD() {
  if (scene.getObjectByName("HUDFront")) {
    var r = scene.getObjectByName("HUDFront"); //r.quaternion.copy(camera.quaternion);

    let hudDist = -1.2;
    let offsetY = 1 * (Math.PI / 180);
    r.rotation.x = 20 * (Math.PI / 180);
    r.rotation.y = camera.rotation.y + offsetY;
    let px, pz, py;
    px = camera.position.x + Math.sin(camera.rotation.y + offsetY) * hudDist;
    pz = camera.position.z + Math.cos(camera.rotation.y + offsetY) * hudDist;
    py = camera.position.y + 0.85;
    r.position.set(px, py, pz);
    r.set({
      borderRadius: 0.01 + 0.01 * Math.sin(Date.now() / 1000),
      borderWidth: 0.01 - 0.001 * Math.sin(Date.now() / 1000),
      borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0.5 + 0.5 * Math.sin(Date.now() / 1000), 0.5, 1)
    });
  }
}

function updateMenu() {
  if (scene.getObjectByName("menuHUD")) {
    // let hudDist = -1.2
    // let offsetY = -5 * (Math.PI/180)
    // r.rotation.x = 20 * (Math.PI/180)
    // r.rotation.y = camera.rotation.y + offsetY;
    // let px, pz, py;
    //     px = camera.position.x + Math.sin(camera.rotation.y + offsetY)* hudDist;
    //     pz = camera.position.z + Math.cos(camera.rotation.y + offsetY)* hudDist;
    //     py = camera.position.y + 0.5;
    // r.position.set(px,py,pz)
    var r = scene.getObjectByName("menuHUD"); //r.quaternion.copy(camera.quaternion);

    let hudDist = -1.2;
    let offsetY = -20 * (Math.PI / 180);
    r.rotation.x = 20 * (Math.PI / 180);
    r.rotation.y = camera.rotation.y + offsetY;
    let px, pz, py;
    px = camera.position.x + Math.sin(camera.rotation.y + offsetY) * hudDist;
    pz = camera.position.z + Math.cos(camera.rotation.y + offsetY) * hudDist;
    py = camera.position.y + 0.8;
    r.position.set(px, py, pz); // r.set({
    //     borderRadius: 0.01 + 0.01 * Math.sin( Date.now() / 1000 ),
    //     borderWidth: 0.01 - 0.001 * Math.sin( Date.now() / 1000 ),
    //     borderColor: new THREE.Color( 0.5 + 0.5 * Math.sin( Date.now() / 1000 ), 0.5, 1 )
    // });
  }
}

function addABC() {
  /* attributes */
  const butOpt = {
    width: 0.4,
    height: 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.075
  };
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.3,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    }
  };
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  /* ABC buttons main Container */

  const bC = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row-reverse',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.07,
    padding: 0.02,
    borderRadius: 0.11
  });
  bC.position.set(0, 1.1, -1.5);
  bC.rotation.x = -0.6;
  scene.add(bC);
  bC.name = "buttonsABC";
  bC.iscale = 1;
  /* button - A - */

  const buttonA = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  buttonA.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: "A"
  }));
  buttonA.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("answer A");
      updateAnswer(0);
    }
  });
  buttonA.setupState(hoveredSA);
  buttonA.setupState(idleSA);
  /* button - B - */

  const buttonB = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  buttonB.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: "B"
  }));
  buttonB.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("answer B");
      updateAnswer(1);
    }
  });
  buttonB.setupState(hoveredSA);
  buttonB.setupState(idleSA);
  /* button - C - */

  const buttonC = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(butOpt);
  buttonC.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: "C"
  }));
  buttonC.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("answer C");
      updateAnswer(2);
    }
  });
  buttonC.setupState(hoveredSA);
  buttonC.setupState(idleSA);
  /* add buttons to Container */

  bC.add(buttonC, buttonB, buttonA);
  objRC.push(buttonA, buttonB, buttonC); // transition from the bottom
}

w.addABC = addABC;

function init() {
  htmlcont = document.createElement('div');
  document.body.appendChild(htmlcont);
  sceneWidth = w.innerWidth;
  sceneHeight = w.innerHeight; //camera = new THREE.PerspectiveCamera(45, sceneWidth / sceneHeight, 0.25, 1000);

  camera = new three__WEBPACK_IMPORTED_MODULE_16__.PerspectiveCamera(50, w.innerWidth / w.innerHeight, 0.25, 20000);
  scene = new three__WEBPACK_IMPORTED_MODULE_16__.Scene();
  w.scene = scene;

  window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = 'script error';

    if (string.indexOf(substring) > -1) {
      console.log('Script Error: See Browser Console for Detail');
    } else {
      var message = ['Message: ' + msg, 'URL: ' + url, 'Line: ' + lineNo, 'Column: ' + columnNo, 'Error object: ' + JSON.stringify(error)].join(' - ');
      console.log("onerror message", message);
    }

    return false;
  };

  window.addEventListener('error', function (error) {
    console.log("error from event handler", error);
  });
  w.camera = camera;
  w.gsap = gsap__WEBPACK_IMPORTED_MODULE_17__.gsap;
  scene.background = new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x68626a);
  scene.fog = new three__WEBPACK_IMPORTED_MODULE_16__.Fog(0x666666, 20, 100);
  pointLight = new three__WEBPACK_IMPORTED_MODULE_16__.PointLight(0xffffff, 1, 100);
  pointLight.position.set(0, 2, 0);
  pointLight.intensity = 0.6;
  scene.add(pointLight);
  dirLight = new three__WEBPACK_IMPORTED_MODULE_16__.DirectionalLight(0xffffff, 1);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(0.5, 0.5, 1.5);
  dirLight.position.multiplyScalar(20);
  dirLight.intensity = 0.6;
  scene.add(dirLight);
  renderer = new three__WEBPACK_IMPORTED_MODULE_16__.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  window.renderer = renderer; //renderer.autoClear = false;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearAlpha(1);
  renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_16__.Color(0), 0);
  renderer.setSize(w.innerWidth, w.innerHeight); //    renderer.outputEncoding = THREE.sRGBEncoding;

  document.body.appendChild(renderer.domElement);
  document.body.appendChild(three_examples_jsm_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_5__.VRButton.createButton(renderer));
  renderer.xr.enabled = true; // check - test perf
  //renderer.xr.setFrameBufferScaleFactor(0.5)

  let xr = renderer.xr; // if you will lower this factor also general drop in quality will be visible
  //xr.setFramebufferScaleFactor(0.5)
  // BOX ROOM

  const room = new three__WEBPACK_IMPORTED_MODULE_16__.LineSegments(new three_examples_jsm_geometries_BoxLineGeometry_js__WEBPACK_IMPORTED_MODULE_1__.BoxLineGeometry(6, 6, 6, 10, 10, 10).translate(0, 3, 0), new three__WEBPACK_IMPORTED_MODULE_16__.LineBasicMaterial({
    color: 0x808080
  })); //scene.add( room );
  // VR controllers

  const lineGeometry = new three__WEBPACK_IMPORTED_MODULE_16__.BufferGeometry().setFromPoints([new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(0, 0, -10)]);
  const line = new three__WEBPACK_IMPORTED_MODULE_16__.Line(lineGeometry, new three__WEBPACK_IMPORTED_MODULE_16__.LineBasicMaterial({
    color: 0xFFFFFF
  }));
  const controllerModelFactory = new three_examples_jsm_webxr_XRControllerModelFactory_js__WEBPACK_IMPORTED_MODULE_6__.XRControllerModelFactory();
  const handModelFactory = new three_examples_jsm_webxr_XRHandModelFactory_js__WEBPACK_IMPORTED_MODULE_7__.XRHandModelFactory().setPath("./models/fbx/"); //

  const controllers = [renderer.xr.getController(0), renderer.xr.getController(1)];
  controllers.forEach((controller, i) => {
    const controllerGrip = renderer.xr.getControllerGrip(i);
    controllerGrip.add(controllerModelFactory.createControllerModel(controllerGrip));
    scene.add(controllerGrip);
    const hand = renderer.xr.getHand(i);
    hand.add(handModelFactory.createHandModel(hand));
    controller.add(line.clone());
    scene.add(controller, controllerGrip, hand);
  });
  /* Scene Controls - Orbit */

  controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.495; //controls.target.set(1, 1.3, 1);
  // controls.minDistance = 0.5;
  // controls.maxDistance = 55;

  camera.position.set(0, 1.3, 0);
  controls.target = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(0, 1.3, -3);
  vrControl = (0,three_mesh_ui_examples_utils_VRControl_js__WEBPACK_IMPORTED_MODULE_9__["default"])(renderer, camera, scene);
  scene.add(vrControl.controllerGrips[0], vrControl.controllers[0]);
  vrControl.controllers[0].addEventListener('selectstart', () => {
    selectState = true;
  });
  vrControl.controllers[0].addEventListener('selectend', () => {
    selectState = false;
  });
  /* Check HLS */

  video = document.getElementById('video');
  console.log('Hls.isSupported(): ', hls_js__WEBPACK_IMPORTED_MODULE_15___default().isSupported()); //-------------------------------------------------
  //addGround();
  //makeClock();
  //makeHelloScreen();
  // makeStartButton();

  loadModel('./assets/models/Myrtis-2-processed.glb', 'myrtis', {
    x: -2,
    y: 1.6,
    z: -2
  }, {
    x: 0.002,
    y: 0.002,
    z: 0.002
  }, 0, {
    speed: 3.75
  }, {
    x: 0,
    y: 1,
    z: 0
  }); // temp - delete

  loadModel('./assets/models/emblem-silver1.glb', 'emblem0', {
    x: -0.4,
    y: 1,
    z: -1.4
  }, {
    x: 0,
    y: 0,
    z: 0
  }, 0, {
    speed: 3.75
  }, {
    x: 0,
    y: 0,
    z: 0
  }, true); // createEndScreen()
  // scene.getObjectByName("endScreen").scale.set(1,1,1)
  // scene.getObjectByName("endScreen").visible = true;

  w.addEventListener("resize", onWindowResize, false); //introStart();

  textureLoader = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader(); //addSkyBox(7)    

  createGatePoints();
  addBasisSkyBox(7); //makeLoginPanel();
  //makeLangPanel();
  // initialize sounds

  initSound();
  makeLangPanel();
  addHUD(); //addMenu();

  animate();
}

async function emblemsUpdate() {
  let url = apiURL;
  let req = "/api/students/emblems/" + userID;
  let meth = "GET";
  const response = await fetch(url + '' + req);
  const json = await response.json();

  if (json.constructor === Array) {
    console.log("json is Array:", json.length, json);
    cloneEmblems(json);
    sendReport(userID, "emblemsUpdate", JSON.stringify(json));
  }

  if (json.data) {
    console.log("json.data", json.data);
  }

  if (json.error) {
    console.log("json.error", json.error);
  }

  if (json.statusCode) {
    console.log("statusCode:", json.statusCode);
  }
}

w.emblemsUpdate = emblemsUpdate;

function cloneEmblems(json) {
  let cD = window.cData; // you have to clone material first
  // ex.: car.children[c].material = object.children[c].material.clone();

  const gold = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255, 215, 0)");
  const white = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(255, 255, 255)");
  const black = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(0, 0, 0)");
  const silver = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(192, 192, 192)");
  const bronze = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(176, 141, 87)");
  const blue = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(0, 0, 255)");
  const yellow = new three__WEBPACK_IMPORTED_MODULE_16__.Color("rgb(125, 255, 125)");

  if (scene.getObjectByName("emblem0")) {
    let sc1 = 0.013;
    let klon0 = scene.getObjectByName("emblem0");
    klon0.isUI2 = true;
    klon0.state = "iddle";
    klon0.iscale = sc1;
    let material0 = klon0.children[0].material.clone();
    let material1 = klon0.children[0].material.clone();
    let material2 = klon0.children[0].material.clone();
    let material3 = klon0.children[0].material.clone();
    klon0.children[0].material = material0; //material0.color.set( gold );

    let klon1 = klon0.clone();
    klon1.isUI2 = true;
    klon1.state = "iddle";
    klon1.name = "emblem1";
    klon1.iscale = sc1;
    klon1.position.x = klon0.position.x + 0.3;
    klon1.children[0].material = material1; //material1.color.set( silver );

    let klon2 = klon0.clone();
    klon2.isUI2 = true;
    klon2.state = "iddle";
    klon2.name = "emblem2";
    klon2.iscale = sc1;
    klon2.position.x = klon0.position.x + 0.3 * 2;
    klon2.children[0].material = material2; //material2.color.set( bronze )

    let klon3 = klon0.clone();
    klon3.isUI2 = true;
    klon3.state = "iddle";
    klon3.name = "emblem3";
    klon3.iscale = sc1;
    klon3.position.x = klon0.position.x + 0.3 * 3;
    klon3.children[0].material = material3; //material3.color.set( yellow )

    scene.add(klon1);
    scene.add(klon2);
    scene.add(klon3);
    var klonArr = [klon0, klon1, klon2, klon3];
    var materialsArr = [material0, material1, material2, material3];
    let tl = gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.timeline({
      delay: 0,
      repeat: 0,
      repeatDelay: 0
    });

    for (let i = 0; i < klonArr.length; i++) {
      let r = klonArr[i];
      tl.to(r.scale, {
        x: sc1,
        y: sc1,
        z: sc1,
        duration: 0.5,
        ease: "power2.out"
      }, "+=0.05");
      tl.from(r.position, {
        y: "-=0.1",
        duration: 0.5,
        ease: "power2.out"
      }, "<");
    }
  }

  let emblemList = cD[cLang].emblemList;

  for (let a in json) {
    let val = json[a]; // search for id in Emblems by result of json[a]

    let obj = emblemList.find(x => x.id === String(val));
    console.log(a, obj);
    materialsArr[a].opacity = 1;
    klonArr[a].data = obj;
    objRC.push(klonArr[a]);

    if (obj.color == "silver") {
      materialsArr[a].color.set(silver);
    }

    if (obj.color == "gold") {
      materialsArr[a].color.set(gold);
    }

    if (obj.color == "bronze") {
      materialsArr[a].color.set(bronze);
    }

    if (obj.color == "black") {
      materialsArr[a].color.set(black);
    }

    if (obj.color == "white") {
      //materialsArr[a].color.set(white)
      materialsArr[a].flatShading = true;
      materialsArr[a].roughness = 0.85;
    }
  }
}

w.cloneEmblems = cloneEmblems;
w.makeTV = makeTV;
let currentRoom = 7;
w.currentRoom = currentRoom;

function setupRoom(num) {
  console.log("setupRoom, num", num);
  w.currentRoom = parseInt(num);
  videoUserInitiated = false; // show only butons from the room

  for (var e in gatesData) {
    let name = gatesData[e].n;
    let label = gatesData[e].l;
    let r = scene.getObjectByName(name);

    if (parseInt(String(name).substr(0, 1)) == num) {
      r.visible = true;
      r.scale.set(1, 1, 1);
      updateHUDTXT(label); //console.log("show only: ", name)
      //objRC.push(r)
      // if(!objRC.findIndex( item => item.name === ""+name+"" )) {
      //     objRC.push(r)
      // }
    } else {
      //objRC.splice(objRC.findIndex( item => item.n === name ),1)
      // objRC.splice(objRC.findIndex( item => item.name === ""+name+"" ),1)
      //console.log("hide: ", name)
      r.visible = false;
      r.scale.set(0, 0, 0);
    }
  } // show / hide


  let pos = roomSetupData.findIndex(item => item.n === parseInt(num));
  let pobj = roomSetupData[pos];

  for (let i = 0; i < pobj["hide"].length; i++) {
    if (scene.getObjectByName(pobj["hide"][i])) {
      let fe = scene.getObjectByName(pobj["hide"][i]);

      if (fe.visible == true) {
        fe.visible = false;
        fe.userData.unhide = true;
        fe.scale.set(0, 0, 0);
      }
    }
  }

  for (let i = 0; i < pobj["show"].length; i++) {
    if (scene.getObjectByName(pobj["show"][i])) {
      let fe = scene.getObjectByName(pobj["show"][i]);
      if (fe.visible == false && fe.userData.unhide == true) fe.visible = true;

      if (fe.iscale) {
        fe.scale.x = fe.iscale;
        fe.scale.y = fe.iscale;
        fe.scale.z = fe.iscale;
      }
    }
  } //console.log(pobj["cb"])


  if (window.callBacks[pobj["cb"][0]]) {
    window.callBacks[pobj["cb"][0]]();
  } // }
  // // remove from objRC
  // //objRC.splice(objRC.findIndex( item => item.name === "7_1" ),1)
  // Object.keys(gatesData).forEach(key => {
  //     let n = gatesData[key].n;
  //     console.log("forEach", key, n);
  //     if(parseInt(String(n).substr(0,1)) !== num) {
  //         console.log("hide forEach: ", n)
  //         objRC.splice(objRC.findIndex( item => item.name === ""+n+"" ),1)
  //         scene.getObjectByName(n).visible = false;
  //     } else {
  //         objRC.push(scene.getObjectByName(n))
  //     }
  //     // if(parseInt(String(name).substr(0,1)) == num) {
  //     // }
  // });
  //     // if (key && userData[key] !== '') {
  //     //     for (let f = 1; f < 5; f++) {
  //     //         let bf = scene.getObjectByName("b" + f + "" + key);

}

let callBacks = {
  cb1: function () {
    console.log("cb1");
  },
  cb2: function () {
    console.log("cb2");
  }
};
w.callBacks = callBacks;
let notQuiz = ["myrtis", "conLogin", "conLang", "HelloTXTFront", "buttonSTART", "CLOCK", "endScreen", "buttonsABC", "qContainer", "emblem1", "emblem2", "emblem3", "emblem0"];
let roomSetupData = [{
  n: 1,
  show: [],
  hide: ["tvset", "tvsetButCon"].concat(notQuiz),
  cb: []
}, {
  n: 2,
  show: [],
  hide: ["tvset", "tvsetButCon"].concat(notQuiz),
  cb: []
}, {
  n: 3,
  show: [],
  hide: ["tvset", "tvsetButCon"].concat(notQuiz),
  cb: []
}, {
  n: 4,
  show: [],
  hide: ["tvset", "tvsetButCon"].concat(notQuiz),
  cb: []
}, {
  n: 5,
  show: ["tvset", "tvsetButCon"],
  hide: notQuiz,
  cb: ["cb1"]
}, {
  n: 6,
  show: [],
  hide: ["tvset", "tvsetButCon"].concat(notQuiz),
  cb: []
}, // outdoors
{
  n: 7,
  show: ["tvset", "tvsetButCon"].concat(notQuiz),
  hide: [],
  cb: ["cb2"]
}];
w.roomSetupData = roomSetupData;
let gatesData = [{
  n: "7_1",
  p: {
    x: -24,
    y: 1.2,
    z: -1.8
  },
  r: {
    x: 0,
    y: 1.48,
    z: 0
  },
  l: "Entrance"
}, {
  n: "1_7",
  p: {
    x: 20,
    y: 1.2,
    z: 0
  },
  r: {
    x: 0,
    y: -1.48,
    z: 0
  },
  l: "Outdoors"
}, {
  n: "1_2",
  p: {
    x: 6,
    y: 1.2,
    z: 16
  },
  r: {
    x: 0,
    y: 3.14,
    z: 0
  },
  l: "United Nations"
}, {
  n: "1_6",
  p: {
    x: -12,
    y: 1.2,
    z: 10
  },
  r: {
    x: 0,
    y: 2.356,
    z: 0
  },
  l: "Playground"
}, {
  n: "2_1",
  p: {
    x: 19,
    y: 1.2,
    z: -2
  },
  r: {
    x: 0,
    y: -1.8,
    z: 0
  },
  l: "Reception"
}, // {n:"2_6",p:{x:2, y:1.2, z:-2},r:{x:0,y:1.48,z:0},l:"Room 2_6"},
// {n:"2_7",p:{x:2, y:1.2, z:-2},r:{x:0,y:1.48,z:0},l:"Room 2_7"},
{
  n: "2_3",
  p: {
    x: -13,
    y: 1.2,
    z: -7
  },
  r: {
    x: 0,
    y: 1.48,
    z: 0
  },
  l: "Squares Room"
}, {
  n: "2_5",
  p: {
    x: -2,
    y: 1.2,
    z: 18
  },
  r: {
    x: 0,
    y: 3.14,
    z: 0
  },
  l: "United Nations"
}, {
  n: "3_2",
  p: {
    x: 16,
    y: 1.2,
    z: -12
  },
  r: {
    x: 0,
    y: -1,
    z: 0
  },
  l: "Squares Room"
}, {
  n: "3_4",
  p: {
    x: -15,
    y: 1.2,
    z: 9
  },
  r: {
    x: 0,
    y: 2,
    z: 0
  },
  l: "The Sculp Room"
}, {
  n: "4_3",
  p: {
    x: -7,
    y: 1.2,
    z: -14
  },
  r: {
    x: 0,
    y: 0.8,
    z: 0
  },
  l: "Squares Room"
}, {
  n: "4_5",
  p: {
    x: 14,
    y: 1.2,
    z: -10
  },
  r: {
    x: 0,
    y: -1,
    z: 0
  },
  l: "United Nations"
}, {
  n: "5_4",
  p: {
    x: -10,
    y: 1.2,
    z: -14
  },
  r: {
    x: 0,
    y: 0.5,
    z: 0
  },
  l: "Sculp Room"
}, {
  n: "5_2",
  p: {
    x: 8,
    y: 1.2,
    z: 10
  },
  r: {
    x: 0,
    y: -3,
    z: 0
  },
  l: "Reception"
}, {
  n: "6_1",
  p: {
    x: 8,
    y: 1.2,
    z: -18
  },
  r: {
    x: 0,
    y: 5.2,
    z: 0
  },
  l: "Reception"
}];
w.gatesData = gatesData;

function rotateScene(deg) {// scene.background = new THREE.Background( cubeTexture );
  // scene.background.rotation.y = Math.PI / 2;
}

w.rotateScene = rotateScene;

function createGatePoints() {
  for (var e in gatesData) {
    //console.log(e,gatesData[e])
    addGate(gatesData[e]);
  }
}

w.createGatePoints = createGatePoints;

function gotoSkyBox(num) {
  console.log("gotoSkyBox num", num);
  addBasisSkyBox(num);
  let uid;

  if (!userID) {
    uid = "init";
  } else {
    uid = userID;
  }

  sendReport(uid, "gotoSkyBox: " + num, new Date().toLocaleTimeString());
}

w.gotoSkyBox = gotoSkyBox;

function addGate(d) {
  const g = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block({
    justifyContent: 'center',
    alignContent: 'center',
    contentDirection: 'row-reverse',
    fontFamily: (_assets_fonts_gr_Arev_msdf_json__WEBPACK_IMPORTED_MODULE_11___default()),
    fontTexture: _assets_fonts_gr_Arev_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    fontSize: 0.7,
    padding: 0.02,
    borderRadius: 0.5,
    borderWidth: 0.1,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00),
    backgroundOpacity: 0.5
  });
  scene.add(g);
  g.position.copy(d.p);
  g.rotation.x = d.r.x;
  g.rotation.y = d.r.y;
  g.rotation.z = d.r.z; //g.name = d.n

  const buttonOptions = {
    width: 7,
    height: 2.5,
    justifyContent: 'center',
    alignContent: 'center',
    offset: 0.05,
    margin: 0.02,
    borderRadius: 0.5,
    borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
  };
  const hoveredSA = {
    state: "hovered",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x999999),
      backgroundOpacity: 0.7,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
    },
    onSet: () => {
      sounds.tap.play();
    }
  };
  const idleSA = {
    state: "idle",
    attributes: {
      offset: 0.035,
      backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x666666),
      backgroundOpacity: 0.1,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00),
      borderColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffff00)
    }
  };
  const gateWayB = new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Block(buttonOptions);
  gateWayB.add(new three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].Text({
    content: d.l
  }));
  const selSA = {
    offset: 0.02,
    backgroundColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x777777),
    fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x222222)
  };
  gateWayB.setupState({
    state: "selected",
    attributes: selSA,
    onSet: () => {
      console.log("onSet d.n", d.n);
      let newroom = parseInt(String(d.n).substr(2, 2));
      gotoSkyBox(newroom);
    }
  });
  gateWayB.setupState(hoveredSA);
  gateWayB.setupState(idleSA);
  g.add(gateWayB);
  g.name = d.n;
  g.visible = false;
  g.scale.set(0, 0, 0);
  objRC.push(gateWayB);
}

w.addGate = addGate;

function onWindowResize() {
  camera.aspect = w.innerWidth / w.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(w.innerWidth, w.innerHeight);
}

function animate() {
  renderer.setAnimationLoop(render);
}

let session;

function render(t, frame) {
  const xr = renderer.xr;
  session = xr.getSession();
  const gl = renderer.getContext();
  delta = clock.getDelta();
  gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.ticker.tick(delta);
  /* user enters the VR realm */

  if (session && session_init === false) {
    console.log(" -------- session! ----------");
    updateHUDTXT(window.cData[cLang].intro.welcome + ' ' + "V.2021-12-08T17:09:33.680Z", 0.035);
    session_init = true;
    addMenu();
  }

  updateHUD();
  updateMenu();
  updateButtons();
  three_mesh_ui__WEBPACK_IMPORTED_MODULE_8__["default"].update();
  renderer.render(scene, camera);
}
/*

    Fetching API - test
    ----------------------

                        */


let apiURL = "https://195.167.80.54"; //let apiURL = "https://uc13api.samsunginter.net"

console.log("apiURL", apiURL);
let dataResult = {};
w.dataResult = dataResult;

async function getUserData(id) {
  console.log("getUserData", id);
  let url = apiURL;
  let req = "/api/student/" + id;
  let meth = "GET"; //const response = await fetch(url + '' + req, { mode: 'no-cors'});

  const response = await fetch(url + '' + req);
  const json = await response.json();
  w.dataResult = json;

  if (json.constructor === Array) {
    console.log("It's an array");
    console.log(json); // for(let a in json[0])
    //     { console.log(a,": ", json[0][a])
    // }
    // if(json.length > 1) {
    //     for(let b in json) {
    //         let f = json[b]
    //         console.log('id: ]',f.id)
    //         for(let ref in f) {
    //             console.log('  -',f[ref])
    //         }
    //         //console.log(dataResult[a])
    //     }
    // }
  }

  if (json.data) {
    console.log("It has data");
    console.log(json.data);
  }

  if (json.error) {
    console.log("error");
    scene.getObjectByName("loginTitle").children[1].set({
      fontSize: 0.075,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000),
      content: String(json.error + ": " + json.statusCode)
    });
    scene.getObjectByName("loginDesField").set({
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000),
      content: String(json.message)
    });
    sounds.glitch.play();
  }

  if (json) {
    console.log("json", json);
    userData.profile = json;
    setTimeout(() => {
      hideLoginPanel();
      loginPanelStatus = true;
    }, 500);
  }

  if (json.statusCode) {
    console.log("statusCode:", json.statusCode);
  } // analytics report


  sendReport(userID, "getUserData", new Date().getTime() + "" + JSON.stringify(json));
}
/* 

    login 
    -----------

    */


async function loginApi(url, req, meth) {
  let cD = window.cData; // just hide and disable confirmB forever

  objRC.splice(objRC.findIndex(item => item.name === "confirmB"), 1);
  let ff = scene.getObjectByName("confirmB");
  ff.visible = false;
  ff.scale.set(0, 0, 0);

  if (!url) {
    url = apiURL;
  }

  if (!req) {
    req = "/api/test";
  }

  if (!meth) {
    meth = "GET";
  }

  const response = await fetch(url + '' + req);
  const json = await response.json();
  w.dataResult = json;

  if (json.data) {
    console.log("It has data");
    console.log(json.data);
  }

  if (json.error) {
    let errorMsg = 'User not found';
    scene.getObjectByName("loginTitle").children[1].set({
      fontSize: 0.075,
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xff0000),
      content: String(errorMsg)
    }); //scene.getObjectByName("loginDesField").set( { fontColor: new THREE.Color( 0xff0000 ), content: String( json.message ) } );
    // scene.getObjectByName("loginTitle").children[1].set( { fontSize: 0.075, fontColor: new THREE.Color( 0xff0000 ), content: String( json.error+": "+json.statusCode ) } );
    // scene.getObjectByName("loginDesField").set( { fontColor: new THREE.Color( 0xff0000 ), content: String( json.message ) } );
    // enable and show button again

    objRC.push(scene.getObjectByName("confirmB"));
    let rr = scene.getObjectByName("confirmB");
    rr.visible = true;
    rr.scale.set(1, 1, 1);
    sendReport(errorMsg, "loginApi", JSON.stringify(json));
    sounds.glitch.play();
  }

  if (json.id) {
    scene.getObjectByName("loginTitle").children[1].set({
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0x00ff00),
      content: String(cD[cLang].msg.success)
    });
    scene.getObjectByName("loginDesField").set({
      fontColor: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff),
      content: String("ID: " + json.id)
    });
    console.log("User ID: ", json.id);
    userID = json.id;
    sendReport(userID, "loginApi", new Date().getTime());
    getUserData(json.id);
  }

  console.log("statusCode:", json.statusCode);
  console.log("json", json);
}

w.loginApi = loginApi;
/*

    Init and Config
    ----------------------

                        */

function loadConfig(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', curConf, true);

  xobj.onreadystatechange = function () {
    //console.log('xobj.readyState',xobj.readyState)
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };

  xobj.send(null);
}

function initConfig(id) {
  //curConf = contentData[id].path
  loadConfig(function (response) {
    var json = JSON.parse(response);
    console.log('Content:', json); //content = json;

    window.cData = json;
    init();
  });
}

w.initConfig = initConfig; //w.changeConfig = changeConfig;

initConfig(0);
