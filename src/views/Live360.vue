<template>
    <div id="wrap">


        <div id="con3d">
            <quick-home-menu />
            <video id="video1" loop muted crossOrigin="anonymous" playsinline>
                <source src="https://stream.workwork.fun/hls/fishtank.m3u8" type="application/x-mpegURL">
            </video>

                    <div id="playerLog">{{playerLog}}</div>
                    <div id="cameraInfo">{{cameraInfo}}</div>

        </div>


        <div id="buttons">
            <b-button class="m-1" :pressed.sync="toggle1" v-on:click="unMute" variant="outline-primary" v-html="muteState">{{muteState}}</b-button>
            <b-button class="m-1" :pressed.sync="toggle2" v-on:click="flatSphere" variant="outline-primary">Sphere/Flat</b-button>
            <b-button class="m-1" v-b-modal.modal-prevent-closing>RTMP URL</b-button>

    <div class="mt-3" id="urlInfo">
      Current RTMP URL: {{ rtmpURL }}

<!--       <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames">{{ name }}</li>
      </ul> -->

    </div>


    


    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Stream Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="if published to rtmp://workwork.fun/show/helena - provide the stream name i.e. 'helena'"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="rtmpURL"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>



    </div>




    </div>

</template>
<script>
/* ---------------------------------- SCRIPT ---------------------------------- */
import * as THREE from 'three'
import VRControl from 'three-mesh-ui/examples/utils/VRControl.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
/* HLS Video */
import Hls from 'hls.js'
/* eslint-disable */
import QuickHomeMenu from '../components/QuickHomeMenu.vue'
const axios = require('axios');
export default {
    metaInfo: {
        meta: [
            { charset: 'utf-8' }
        ],
        title: 'WORKWORK.FUN',
        titleTemplate: '%s ',
        htmlAttrs: {
            lang: 'en',
            amp: true
        }
    },
    components: {
        QuickHomeMenu
    },
    name: 'Live360',
    props: {
        msg: String
    },
    /* ---------------------------------- DATA ---------------------------------- */
    data: function() {
        return {

            /* modal */
            rtmpBaseURL: "https://stream.workwork.fun/hls/",
            rtmpBaseExt: ".m3u8",
            rtmpURL: "fishtank",
            nameState: null,
            submittedNames: [],

            /* buttons */
            muteStates: ["🔇", "🔊"],
            muteState: "🔇",
            videoData: {
                src: "./assets/videos/OJQR7915.MP4"
            },
            videoEnded: false,
            toggle1: false,
            toggle2: false,
            /* Camera */
            camTarget: {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            },
            /* Car */
            car: {
                speed: 0,
                speedMin: 1,
                speedMaxC: 7,
                speedMax: 7 / 2,
                speedMaxReverse: -7,
                speedAcceleration: .03,
                groundFriction: 0.99,
                agility: 0.2,
                agilityRev: 0.8,
                steering: 0,
                steeringMax: 7,
                steeringAcceleration: .002,
                steeringAccelerationMax: .02,
                steeringFriction: 0.9,
                velocityX: 0,
                velocityY: 0,
                radiance: -1 * Math.PI,
                carDirection: 1,
                aR: 0,
                wheelsFrontL: null,
                wheelsFrontR: null,
                wheels: null
            },
            /* Keyboard */
            keyUP: false,
            keyDOWN: false,
            keyLEFT: false,
            keyRIGHT: false,
            /* THREE.js */
            animID: "animID",
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            mesh: null,
            show: false,
            things: [],
            xr: null,
            meshSphere: null,
            meshFlat: null,
            hsl: null,
            videoUserInitiated: false,
            session: null,
            session_init: null,
            isUserInteracting: false,
            onPointerDownPointerX: 0,
            onPointerDownPointerY: 0,
            onPointerDownLon: 0,
            onPointerDownLat: 0,

            cameraInfo: null,
            playerLog: null,    

            lon: 0,
            lat: 0,
            distance: 50,
            /* Setup */
            apiurl: this.$root.$store.state.apiURL,
            user_fields: [
                { key: 'username', label: "Username", sortable: true },
                { key: 'email', label: "Email", sortable: true },
                { key: 'lastlogin', label: "Last Login", sortable: true },
                { key: 'born', label: "Born", sortable: true }
            ],
            users: [],
            user_details_fields: [
                { key: 'username', label: "Username" },
                { key: 'email', label: "Email" },
                { key: 'lastlogin', label: "Last Login" },
                { key: 'born', label: "Born" }
            ],
            user_details: [],
            toastCount: 0,
            resp: {},
            token: {},
            form: {
                email: '',
                password: ''
            },
            show: true
        }
    },
    mounted() {
        //console.log(' - - - mounted') 
        this.initScene()
    },
    created() {
        //console.log(' - - - created')
    },
    destroyed() {
        //console.log(' Video360.vue - - - destroyed')
    },
    beforeDestroy() {
        this.empty(document.getElementById('con3d'));
        //console.log(' - - - before Destroyed')  
    },
    /* ---------------------------------- METHODS ---------------------------------- */
    directives: {
        focus: {
            inserted(el) {
                el.focus()
            }
        }
    },

    /*  Methods */
    
    methods: {

        returnCameraInfo() {
            //console.log("returnCameraInfo")
            let str = "x: "+String(this.camera.position.x).substr(0,5) 
                    + ", y: "+String(this.camera.position.y).substr(0,5) 
                    + ", z: "+String(this.camera.position.z).substr(0,5)
            this.cameraInfo = "Camera: "+str;
        },


        returnPlayerLog(...str) {
            //console.log("returnPlayerLog");
            this.playerLog = ''+str +"\r\n";
        },

       checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            return valid
          },

          resetModal() {
            //this.rtmpURL = ''
            this.nameState = null
          },

          handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
          },

          handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
              return
            }
            // Push the name to submitted names
            //this.submittedNames.push(this.rtmpURL)
            this.reloadStream(this.rtmpURL);

            // Hide the modal manually
            this.$nextTick(() => {
              this.$bvModal.hide('modal-prevent-closing')
            })
          },


          reloadStream(rtmpURL) {
                console.log("reloadStream: ",rtmpURL)                
                // const video = document.getElementById("video1");
                // let videoURL = this.rtmpURL;                
                this.playVideo()
            },


        unMute() {
            const media = document.querySelector('video');
            if (media.muted == true) {
                media.muted = false;
                this.muteState = this.muteStates[1]
            } else {
                media.muted = true;
                this.muteState = this.muteStates[0]
            }
            //console.log("unMute: - media.muted:", media.muted);
        },

        flatSphere() {
            // switch between geometries
            console.log("flatSphere");

            //if()
            if(this.meshFlat.visible == false) {
                this.meshFlat.visible = true;
                this.meshSphere.visible = false;

                this.camera.rotation.set(0,0,0)
                this.camera.position.set(0,0,20)

            } else {
                this.meshFlat.visible = false;
                this.meshSphere.visible = true;


            }

        },


        playVideo() {

            console.log("playVideo")

            const video = document.getElementById("video1")
            const hls = new Hls();
            //window.hls = hls;            


            let rtmpLink = this.rtmpBaseURL + this.rtmpURL + this.rtmpBaseExt;

            let returnPlayerLog = this.returnPlayerLog;

            if (this.videoUserInitiated == false) {



                console.log('playVideo - (1) first time');
                // initiate all HLS stuff
                
                if (Hls.isSupported()) {
                    hls.loadSource(rtmpLink);
                    hls.attachMedia(video);

                    hls.on(Hls.Events.MANIFEST_PARSED, function() {
                        console.log('hls.on(Hls.Events.MANIFEST_PARSED - video.play()')
                        video.play();
                        returnPlayerLog('hls.on(Hls.Events.MANIFEST_PARSED')
                        // pause
                        //scene.getObjectByName("tvsetPlayButton").children[1].set({content: cD[cLang].video.pause})
                    });

                    hls.on(Hls.Events.ERROR, function(e) {
                        //console.log('hls.on(Hls.Events.ERROR',e);
                        //sendReport(userID,"playVideo: error: "+e, rtmpLink)
                        returnPlayerLog("playVideo: error: "+e)
                    });

                    hls.on(Hls.Events.FRAG_CHANGED, function() {
                      //console.log('hls.on(Hls.Events.FRAG_CHANGED');
                        returnPlayerLog("playVideo: Hls.Events.FRAG_CHANGED");
                    });

                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = rtmpLink;
                    video.addEventListener('loadedmetadata', function() {
                        console.log('loadedmetadata - video.play()')
                        video.play();
                        //sendReport(userID,"playVideo: loadedmetadata",rtmpLink)
                    });
                }

                    video.addEventListener('ended', function (e) {
                      returnPlayerLog('video ended -  - Playback has stopped because the end of the media was reached.', e); // again

                    }, false);
                    
                    video.addEventListener('progress', function (e) {
                      returnPlayerLog('progress', e);
                      returnPlayerLog('progress', e.target.currentTime, e.target.duration);
                    }, false);
                    
                    video.addEventListener('playing', function (e) {
                      returnPlayerLog('playing', e); //returnPlayerLog(e.target.currentTime,e.target.duration)
                    }, false);
                    
                    video.addEventListener('waiting', function (e) {
                      returnPlayerLog('waiting - Playback has stopped because of a temporary lack of data', e); //returnPlayerLog(e.target.currentTime,e.target.duration)
                    }, false);
                    
                    video.addEventListener('stalled', function (e) {
                      returnPlayerLog('stalled - The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.', e); //returnPlayerLog(e.target.currentTime,e.target.duration)
                    }, false);
                    
                    video.addEventListener('emptied', function (e) {
                      returnPlayerLog('emptied - The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.', e); //returnPlayerLog(e.target.currentTime,e.target.duration)
                    }, false);
                    
                    video.addEventListener('complete', function (e) {
                      returnPlayerLog('complete - The rendering of an OfflineAudioContext is terminated.', e); //this.returnPlayerLog(e.target.currentTime,e.target.duration)
                    }, false);




                // video.setAttribute("poster", "./assets/media/poster.jpg"),
                // video.poster = "./assets/media/poster.jpg";


                    const texture = new THREE.VideoTexture(video);
                    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
                    
                    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
                    sphereGeometry.scale(-1, 1, 1);
                    this.meshSphere = new THREE.Mesh(sphereGeometry, material);
                    this.scene.add(this.meshSphere);
                    
                    const flatGeometry = new THREE.PlaneGeometry(1.78 * 20, 1 * 20, 4, 4);
                    this.meshFlat = new THREE.Mesh(flatGeometry, material);
                    this.meshFlat.position.set(2.6, 2, 0.25);
                    this.meshFlat.rotation.y = 0 * (Math.PI / 180);
                    this.meshFlat.visible = true;
                    this.scene.add(this.meshFlat);

                    this.videoUserInitiated = true;


            } else {


                video.pause();
                hls.detachMedia();
                video.src = rtmpLink;

                hls.attachMedia(video);
                hls.loadSource(rtmpLink)
                


               if (this.videoEnded == true || video.paused == true) {
                  video.play();
                } else {
                  video.pause();
                }              


            }


        },



        initScene() {
            let con = document.getElementById('con3d');
            //console.log('app', con.offsetWidth, con.offsetHeight)
            var width = con.offsetWidth;
            var height = con.offsetHeight;
            this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);

            this.camera.position.set(100, 1, 100);
            
            this.scene = new THREE.Scene();
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.xr.enabled = true;
            this.xr = this.renderer.xr
            //console.log(this.xr)
            this.xr.getSession();
            con.appendChild(this.renderer.domElement);
            con.appendChild(VRButton.createButton(this.renderer));
            window.addEventListener('resize', this.handleResize)
            // window.addEventListener('pointerdown', this.onPointerDown);
            // window.addEventListener('pointermove', this.onPointerMove);
            // window.addEventListener('pointerup', this.onPointerUp);
            window.addEventListener('keydown', function(event) {
                const media = document.querySelector('video');
                if (event.code == "Space") {
                    if (media.paused) {
                        media.play();
                    } else {
                        media.pause();
                    }
                }
            });
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            //this.controls.maxPolarAngle = Math.PI * 0.495;
            //controls.target.set(1, 1.3, 1);
            // controls.minDistance = 0.5;
            // controls.maxDistance = 55;
            //this.camera.position.set(0, 1.3, 0);
            this.controls.target = new THREE.Vector3(0, 0, 0);

            let returnCameraInfo = this.returnCameraInfo;

            this.controls.addEventListener( 'start', function() {
                //console.log("controls: start")
                returnCameraInfo();
            } );

            this.controls.addEventListener( 'end', function() {
                //console.log("controls: end")
                returnCameraInfo();
            } );


            const room = new THREE.LineSegments(
                new BoxLineGeometry(100, 100, 100, 4, 4, 4).translate(0, 0, 0),
                new THREE.LineBasicMaterial({ color: 0x808080 })
            );
            this.scene.add(room);
            room.name = "room"
            window.room = room;



            this.animate();
            //this.addVR(this.scene);
            
            this.playVideo();

            //window.scene = this.scene;
            //window.render = this.render;
            window.camera = this.camera;

            this.handleResize()
            this.show = true;
        },
        render() {
            // this.lat = Math.max(-85, Math.min(85, this.lat));
            // this.phi = THREE.MathUtils.degToRad(90 - this.lat);
            // this.theta = THREE.MathUtils.degToRad(this.lon);
            // this.camera.position.x = this.distance * Math.sin(this.phi) * Math.cos(this.theta);
            // this.camera.position.y = this.distance * Math.cos(this.phi);
            // this.camera.position.z = this.distance * Math.sin(this.phi) * Math.sin(this.theta);
            // this.camera.lookAt(0, 0, 0);
            this.renderer.render(this.scene, this.camera);
        },
        animate() {
            this.renderer.setAnimationLoop(this.render);
        },
        onPointerDown(event) {
            this.isUserInteracting = true;
            this.onPointerDownPointerX = event.clientX;
            this.onPointerDownPointerY = event.clientY;
            this.onPointerDownLon = this.lon;
            this.onPointerDownLat = this.lat;
        },
        onPointerMove(event) {
            if (this.isUserInteracting === true) {
                this.lon = (this.onPointerDownPointerX - event.clientX) * 0.1 + this.onPointerDownLon;
                this.lat = (this.onPointerDownPointerY - event.clientY) * 0.1 + this.onPointerDownLat;
            }
        },
        onPointerUp() {
            this.isUserInteracting = false;
        },
        handleResize(event) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            //console.log('handle Resize:',window.innerWidth,'x',window.innerHeight)
        }
    },
    /* ---------------------------------- FILTERS ---------------------------------- */
    filters: {
        capitalize(value) {
            return value;
        },
        ts2UTC(ts) {
            return (new Date(ts)).toUTCString()
        },
        showDate(v) {
            return (new Date(parseInt(v) * 1000))
        },
        tdif3(t) {
            var time = new Date(t)
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1) {
                //console.log('ua:', ua)
                if (ua.indexOf('chrome') > -1) {} else {
                    //console.log('this is safari')
                    var newt = (t).split(" ").join("T")
                    time = new Date(newt).getTime();
                }
            }
            var previous = t
            var current = new Date().getTime();
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            var elapsed = current - previous;
            if (isNaN(elapsed) === true) {} else {
                if (elapsed < msPerMinute) {
                    return Math.round(elapsed / 1000) + ' sec ago';
                } else if (elapsed < msPerHour) {
                    return Math.round(elapsed / msPerMinute) + ' min ago';
                } else if (elapsed < msPerDay) {
                    return Math.round(elapsed / msPerHour) + ' hours ago';
                } else if (elapsed < msPerMonth) {
                    return '' + Math.round(elapsed / msPerDay) + ' days ago';
                } else if (elapsed < msPerYear) {
                    return '' + Math.round(elapsed / msPerMonth) + ' months ago';
                } else {
                    return '' + Math.round(elapsed / msPerYear) + ' years ago';
                }
            }
        },
        tdif(t) {
            var time = new Date(t)
            var previous = t
            var current = new Date().getTime();
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            var elapsed = current - previous;
            if (isNaN(elapsed) === true) {} else {
                if (elapsed < msPerMinute) {
                    return Math.round(elapsed / 1000) + ' sec ago';
                } else if (elapsed < msPerHour) {
                    return Math.round(elapsed / msPerMinute) + ' min ago';
                } else if (elapsed < msPerDay) {
                    return Math.round(elapsed / msPerHour) + ' hours ago';
                } else if (elapsed < msPerMonth) {
                    return '' + Math.round(elapsed / msPerDay) + ' days ago';
                } else if (elapsed < msPerYear) {
                    return '' + Math.round(elapsed / msPerMonth) + ' months ago';
                } else {
                    return '' + Math.round(elapsed / msPerYear) + ' years ago';
                }
            }
        },
        tdif2(t) {
            var previous = new Date(t).getTime();
            var current = new Date().getTime();
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            var elapsed = current - previous;
            if (isNaN(elapsed) === true) {} else {
                if (elapsed < msPerMinute) {
                    return Math.round(elapsed / 1000) + ' sec ago';
                } else if (elapsed < msPerHour) {
                    return Math.round(elapsed / msPerMinute) + ' min ago';
                } else if (elapsed < msPerDay) {
                    return Math.round(elapsed / msPerHour) + ' hours ago';
                } else if (elapsed < msPerMonth) {
                    return '' + Math.round(elapsed / msPerDay) + ' days ago';
                } else if (elapsed < msPerYear) {
                    return '' + Math.round(elapsed / msPerMonth) + ' months ago';
                } else {
                    return '' + Math.round(elapsed / msPerYear) + ' years ago';
                }
            }
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#con3d {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
}

#video1 {
    position: absolute;
    display: none;
}

#wrap {
    width: 100%;
    height: 100%;
}

#buttons {
    position: absolute;
    bottom: 0;
    padding: 1rem;

}

#urlInfo {
    color: white;
}

#cameraInfo {
    color: white;
    position: absolute;
    left: 30px;
    top: 80px;
}

#playerLog {
    color: white;
    position: absolute;
    right: 30px;
    top: 80px;
}
  .icon {
    color: #999999;
    height: 19px;
    margin-right: 8px;
  }
  .icon:hover {
    color: #ff1493;
  }
  .icon-close {
    color: red
  }

</style>