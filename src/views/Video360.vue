<template>
    <div id="con3d">
        <quick-home-menu />
        <video id="video1" loop muted crossOrigin="anonymous" playsinline>
            <source src="videos/CCGF9667.MP4" type="video/mp4">
        </video>
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
    name: 'Video360',
    props: {
        msg: String
    },



    /* ---------------------------------- DATA ---------------------------------- */
    data: function() {
        return {
            videoData: {
                src: "./assets/videos/OJQR7915.MP4"
            },
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
            session: null,
            session_init: null,
            isUserInteracting: false,
            onPointerDownPointerX: 0,
            onPointerDownPointerY: 0,
            onPointerDownLon: 0,
            onPointerDownLat: 0,
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
        console.log(' Video360.vue - - - destroyed')
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


    methods: {

        addVR(scene) {
            const video = document.getElementById("video1")
            video.play();
            const texture = new THREE.VideoTexture(video);
            const material = new THREE.MeshBasicMaterial({ map: texture });
            const geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);
            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);
        },

        initScene() {

            let con = document.getElementById('con3d');
            //console.log('app', con.offsetWidth, con.offsetHeight)
            var width = con.offsetWidth;
            var height = con.offsetHeight;

            this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
            this.camera.position.set(14, 1, 21);
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




            this.animate();
            this.addVR(this.scene);


            window.scene = this.scene;

            window.render = this.render;
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
                console.log('ua:', ua)
                if (ua.indexOf('chrome') > -1) {} else {
                    console.log('this is safari')
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
</style>