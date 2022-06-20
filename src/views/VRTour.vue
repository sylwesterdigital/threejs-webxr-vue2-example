<template>  
  <div id="con3d">

  <quick-menu />
  <video id="video1" loop muted crossOrigin="anonymous" playsinline
  >
    <source
      src="uploads/3d/BOPC5522.MOV"
      type="video/mp4"
    >
  </video>
</div>
</template>

<script>

  
import * as THREE from 'three'
//import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/* Owo Misc Methods */
import { Owo } from '../libs/Oneworld.js'  

import VRControl from 'three-mesh-ui/examples/utils/VRControl.js';

import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';


/* eslint-disable */  



import QuickMenu from '../components/QuickMenu.vue'   
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
    QuickMenu
  },    
  name: 'VRTour',
  props: {
    msg: String
  },
    
  /* ---------------------------------- DATA ---------------------------------- */
  data: function () {
    return {

      videoData: {
        src: "./assets/videos/OJQR7915.MP4"
      },
      
      /* Camera */
      camTarget: {
        position: {
          x:0,
          y:0,
          z:0
        }
      },
      
      
      
      /* Car */
      car: {
        speed: 0,
        speedMin: 1,
        speedMaxC: 7,
        speedMax: 7/2,
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
      keyDOWN:false,
      keyLEFT:false,
      keyRIGHT:false,      
      
      /* THREE.js */
      animID: "animID",      
      camera: null,
      scene: null,
      renderer: null,
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
        {key:'username', label:"Username", sortable:true}, 
        {key:'email', label:"Email", sortable:true}, 
        {key:'lastlogin', label:"Last Login", sortable:true}, 
        {key:'born', label:"Born", sortable:true}
      ],
      users: [],
      user_details_fields: [
        {key:'username', label:"Username"}, 
        {key:'email', label:"Email"}, 
        {key:'lastlogin', label:"Last Login"}, 
        {key:'born', label:"Born"}
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
  mounted () { 
    console.log(' - - - mounted') 
    //this.getUserDetails();
    this.initScene()
  },
    
  created () {
    console.log(' - - - created')
    //this.initScene();
    //console.log(this.user_details)
  },
    
  destroyed () {
    console.log(' - - - destroyed')
  },
    
  beforeDestroy () {
     
    //cancelAnimationFrame(this.animate);// Stop the animation
//    this.renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render
//    this.scene = null;
//    this.camera = null;
//    this.renderer = null;
    this.empty(document.getElementById('con3d'));
    
    console.log(' - - - before Destroyed')  
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
    
    keyU_Down(event) {
      this.keyUP = true;
    },
    keyU_Up(event) {
      this.keyUP = false;
    },
    keyD_Down(event) {
      this.keyDOWN = true;
    },
    keyD_Up(event) {
      this.keyDOWN = false;
    },
    keyL_Down(event) {
      this.keyLEFT = true;
    },
    keyL_Up(event) {
      this.keyLEFT = false;
    },
    keyR_Down(event) {
      this.keyRIGHT = true;
    },
    keyR_Up(event) {
      this.keyRIGHT = false;
    },
    
    empty(elem) {
        while (elem.lastChild) elem.removeChild(elem.lastChild);
    },


    addVR(scene) {


        const video = document.getElementById("video1")
        video.play();


        const texture = new THREE.VideoTexture( video );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const geometry = new THREE.SphereGeometry( 500, 60, 40 );
        geometry.scale( - 1, 1, 1 );        
        const mesh = new THREE.Mesh( geometry, material );
        this.scene.add( mesh );
        
        // try {
        //     // video.setAttribute("loop", "false"),
        //     // video.loop = false;
        //     // video.setAttribute("muted", ""),
        //     // video.setAttribute("playsinline", ""),
        //     // video.setAttribute("webkit-playsinline", ""),
        //     // video.setAttribute("crossorigin", "anonymous");
        //     video.src = name;
        // } catch (err) {
        //     console.log(err);
        // } finally {    
        //     const texture = new THREE.VideoTexture( video );
        //     const material = new THREE.MeshBasicMaterial( { map: texture } );
        //     const geometry = new THREE.SphereGeometry( 500, 60, 40 );

        //     // invert the geometry on the x-axis so that all of the faces point inward
        //     geometry.scale( - 1, 1, 1 );
            
        //     const mesh = new THREE.Mesh( geometry, material );
        //     this.scene.add( mesh );
        // }



    },
    
    addElements(scene) {
      
      Owo.addLights(scene);

      Owo.addSky(scene);
      
      Owo.loadGModel(scene,'../uploads/3d/walker.glb','walker',{x:1,y:1,z:1},{x:-1,y:0,z:0},{x:0,y:45*(Math.PI/180),z:0},function() {
        console.log("cb")
//          var r = this.scene.getObjectByName("walker") 
//          this.car.wheels = [
//           r.getObjectByName("Tyre"),
//           r.getObjectByName("Tyre001"),
//           r.getObjectByName("Tyre002"),
//           r.getObjectByName("Tyre003")    
//          ]
//
//          this.car.wheelsFrontL = [
//            r.getObjectByName("Tyre")
//          ]
//
//          this.car.wheelsFrontR = [
//           r.getObjectByName("Tyre001") 
//          ]        
      })
      Owo.loadGModel(scene,'../uploads/3d/ground.glb','world',{x:5,y:5,z:5},{x:0,y:-10,z:0},{x:0,y:0*(Math.PI/180),z:0})
      
      Owo.addControls(this.camera, this.renderer)


      Owo.loadVR(scene,'../uploads/3d/087569186_360.mp4','world')
      
      
    },
    
    setObj(bla) {
      console.log(this.scene.getObjectByName("Box1").visible)
      
      this.scene.getObjectByName("Box1").visible = bla;
      
    },

    addMeshBox(name) {

        let video = document.getElementById("video")
        
        try {
            // video.setAttribute("loop", "false"),
            // video.loop = false;
            // video.setAttribute("muted", ""),
            // video.setAttribute("playsinline", ""),
            // video.setAttribute("webkit-playsinline", ""),
            // video.setAttribute("crossorigin", "anonymous");
            video.src = name;
        } catch (err) {
            console.log(err);
        } finally {    
            const texture = new THREE.VideoTexture( video );
            const material = new THREE.MeshBasicMaterial( { map: texture } );
            const geometry = new THREE.SphereGeometry( 500, 60, 40 );

            // invert the geometry on the x-axis so that all of the faces point inward
            geometry.scale( - 1, 1, 1 );
            
            const mesh = new THREE.Mesh( geometry, material );
            this.scene.add( mesh );
        }
    },

    
    initScene() {
      
        let con = document.getElementById('con3d');
      
        console.log('app',con.offsetWidth,con.offsetHeight)
      
        var width = con.offsetWidth;
        var height = con.offsetHeight;
      
//        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 10);

        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100); 
        this.camera.position.set(14,1,21); 
      
        this.scene = new THREE.Scene();
      
        // let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        // let material = new THREE.MeshNormalMaterial();
        // this.mesh = new THREE.Mesh(geometry, material);
      
        // this.mesh.name = "Box1"
        // this.scene.add(this.mesh);


        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.xr.enabled = true;
        this.xr = this.renderer.xr

        console.log(this.xr)

        this.xr.getSession();
        //this.xr.setSession(0);

     
        con.appendChild(this.renderer.domElement);

        con.appendChild(VRButton.createButton(this.renderer));

      
        window.addEventListener('resize', this.handleResize)

        window.addEventListener( 'pointerdown', this.onPointerDown );
        window.addEventListener( 'pointermove', this.onPointerMove );
        window.addEventListener( 'pointerup', this.onPointerUp );   


        window.addEventListener('keydown', function(event) {
          
          const media = document.querySelector('video');

          if(event.code == "Space") {
              if(media.paused) {
                media.play();
              } else {
                media.pause();
              }
          }
        });    

      
        this.animate();
      
        //this.addElements(this.scene);
        this.addVR(this.scene);
      
        window.scene = this.scene;
        window.setObj = this.setObj;

        window.render = this.render;
        
      
        this.handleResize()
      
        this.show = true;

      
      
    },



    
    /* RUN CAR */
    turnLeftRightWheels(arr, spin) {
      if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
          var r = arr[i];
          r.rotation.order = 'YXZ';
          r.rotation.y = spin;
        }
      }
    },

    rotateWheels(arr, spin) {
      if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
          var r = arr[i];
          r.rotation.x += spin;
        }
      }
    },    
    
    
    runCar(car,scene) {
      
        var r = car;
        var mc = scene.getObjectByName("walker");
      
        if(mc) {
        this.camTarget = mc;
          
          /* Wheels */
          
          this.car.wheels = [
           mc.getObjectByName("Tyre"),
           mc.getObjectByName("Tyre001"),
           mc.getObjectByName("Tyre002"),
           mc.getObjectByName("Tyre003")    
          ]
          this.car.wheelsFrontL = [
            mc.getObjectByName("Tyre")
          ]
          this.car.wheelsFrontR = [
           mc.getObjectByName("Tyre001") 
          ]   
          
          /* Steering */
          
          if (this.keyDOWN == true) {
              r.carDirection = 1;
              if (r.speed < r.speedMax) {
                  r.speed += r.speedAcceleration;
                  if (r.speed > r.speedMax) {
                      r.speed = r.speedMax;
                  }
              }
              r.agilityRev = car.agilityRev;
          }
          // DOWN Arrow or S (reverse) 
          if (this.keyUP == true) {
              r.carDirection = -1
              if (r.speed > r.speedMaxReverse) {
                  r.speed -= r.speedAcceleration;
                  if (r.speed < r.speedMaxReverse) {
                      r.speed = r.speedMaxReverse;
                  }
              }
              r.agility = r.agility;
          }
          if(this.keyLEFT == false || this.keyRIGHT == false) {
              r.steeringAcceleration -= 0.0017;
              if(r.steeringAcceleration < 0) {
                  r.steeringAcceleration = 0;
              }
          }
          //r.steering -= (r.steering * 0.4);
          // LEFT Arrow or A (turn left)
          if (this.keyRIGHT == true) {
              r.steeringAcceleration += 0.0017;
              if(r.steeringAcceleration > r.steeringAccelerationMax) {
                  r.steeringAcceleration = r.steeringAccelerationMax;
              }
              r.steering -= r.steeringAcceleration*r.steeringFriction;
              if (r.steering > r.steeringMax) {
                  r.steering = r.steeringMax;
              }
          }
          // RIGHT Arrow or D (turn right)
          if (this.keyLEFT == true) {
              r.steeringAcceleration += 0.0017;
              if(r.steeringAcceleration > r.steeringAccelerationMax) {
                  r.steeringAcceleration = r.steeringAccelerationMax;
              }		
              r.steering += r.steeringAcceleration*r.steeringFriction;
              if (r.steering < -r.steeringMax) {
                  r.steering = -r.steeringMax;
              }
          }
          //------------------------------------------------------------
          //
          if (r.steering > 0.042) {
              r.steering = 0.042;
          }	
          if (r.steering < -0.042) {
              r.steering = -0.042;
          }	
          car.steeringm = r.steering*1000;
          // friction    
          r.speed *= r.groundFriction;
          if (r.speed > r.speedMax) {
              r.speed = r.speedMax;
          }
          //console.log(r.speed);
          // ideal changes
          var idealXMov = r.speed * Math.cos(r.radiance);
          var idealYMov = r.speed * Math.sin(r.radiance);
          // real change
          r.velocityX += (idealXMov - r.velocityX) * r.groundFriction;
          r.velocityY += (idealYMov - r.velocityY) * r.groundFriction;
          // update position
          mc.position.x += r.velocityX;
          mc.position.z += r.velocityY;
          r.radiance += (r.steering * r.speed) * r.agility;  
          mc.rotation.y = -r.radiance - (1.57);
          //mc.position.y = poY1;//4 + (Math.random()*r.speed*0.01);  
          this.rotateWheels(this.car.wheels,-r.speed*0.15);
          this.turnLeftRightWheels(this.car.wheelsFrontL,r.steering*20);
          this.turnLeftRightWheels(this.car.wheelsFrontR,r.steering*20);            
        }
      },
    
    
    runGame() {
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      
      this.camera.lookAt(this.camTarget.position.x,this.camTarget.position.y,this.camTarget.position.z);
      
    },





    
    // animate() {
      
    //   this.runGame();
      
    //   requestAnimationFrame(this.animate);
      
    //   this.runCar(this.car, this.scene);
      
    //   this.renderer.render(this.scene, this.camera);
    // },



  render() {

  


    this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
    this.phi = THREE.MathUtils.degToRad( 90 - this.lat );
    this.theta = THREE.MathUtils.degToRad( this.lon );

    this.camera.position.x = this.distance * Math.sin( this.phi ) * Math.cos( this.theta );
    this.camera.position.y = this.distance * Math.cos( this.phi );
    this.camera.position.z = this.distance * Math.sin( this.phi ) * Math.sin( this.theta );

    this.camera.lookAt( 0, 0, 0 );  


    this.renderer.render(this.scene, this.camera);


},

animate() {

    this.renderer.setAnimationLoop(this.render);
    // this.renderer.render(this.scene, this.camera);

},





  onPointerDown( event ) {
      this.isUserInteracting = true;
      this.onPointerDownPointerX = event.clientX;
      this.onPointerDownPointerY = event.clientY;
      this.onPointerDownLon = this.lon;
      this.onPointerDownLat = this.lat;
  },

  onPointerMove( event ) {
      if ( this.isUserInteracting === true ) {
          this.lon = ( this.onPointerDownPointerX - event.clientX ) * 0.1 + this.onPointerDownLon;
          this.lat = ( this.onPointerDownPointerY - event.clientY ) * 0.1 + this.onPointerDownLat;
      }
  },

  onPointerUp() {
      this.isUserInteracting = false;
  },

    
    handleResize(event) {
      this.camera.aspect = window.innerWidth/window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      //console.log('handle Resize:',window.innerWidth,'x',window.innerHeight)
    },    
    
    getUserDetails() {
      console.log('getUserDetails');
      if(!this.token.access_token) {
         this.token.access_token = localStorage.getItem('accessToken');
      }
      axios.get(this.apiurl+'/details', 
                { headers: {
                  Authorization: 'Bearer '+this.token.access_token
        }})
        .then(response => {
          console.log(response.data.user_details);
          this.initScene();
          this.user_details = []
          this.user_details.push(response.data.user_details);
        }
      )
      .catch(error => { 
        console.log(error.response)
        this.makeToast(true, error, 'danger', 'b-toaster-top-center')
        this.$router.push('/login/person');
      });    
    },
    
    getUserList() {
      console.log('getUserList: ', this.token.access_token);
      if(!this.token.access_token) {
         this.token.access_token = localStorage.getItem('accessToken');
      }
      axios.get(this.apiurl+'/users', 
                { headers: {
                  Authorization: 'Bearer '+this.token.access_token
        }})
        .then(response => {
          //console.log(response.data.users);
          this.users = response.data.users;
          var arrObj = [];
          for(var a in this.users) {
              arrObj.push(this.users[a])
          }
          this.users = arrObj;
        }
      )
      .catch(error => { 
        console.log(error.response)
            this.$router.push('/login/person');
      });              
    },
    
    makeToast(append = false, msg, variant,toaster) {
      this.toastCount++
      this.$bvToast.toast('Msg: '+msg+` ${this.toastCount}`, {
        title: 'Network says...',
        variant: variant,
        autoHideDelay: 5000,
        toaster: toaster,
        appendToast: append
      })
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
//      var date = new Date(v*1000);
//      var hours = date.getHours();
//      var minutes = "0" + date.getMinutes();
//      var seconds = "0" + date.getSeconds();
//      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);      
//      return formattedTime;
      return (new Date(parseInt(v)*1000))
    },
    tdif3(t) {
      var time = new Date(t)
      var ua = navigator.userAgent.toLowerCase(); 
      if (ua.indexOf('safari') != -1) { 
        console.log('ua:',ua)
        if (ua.indexOf('chrome') > -1) {
        } else {
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
      if(isNaN(elapsed) === true) {
      } else {
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
//      var ua = navigator.userAgent.toLowerCase(); 
//      if (ua.indexOf('safari') != -1) { 
//        console.log('ua:',ua)
//        if (ua.indexOf('chrome') > -1) {
//        } else {
//           console.log('this is safari')
//          var newt = (t).split(" ").join("T")
//          time = new Date(newt).getTime();
//        }
//      }      
      var previous = t
      var current = new Date().getTime();
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
      var elapsed = current - previous;
      if(isNaN(elapsed) === true) {
      } else {
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
//      var time = new Date(t).getTime();
//      var ua = navigator.userAgent.toLowerCase(); 
//      if (ua.indexOf('safari') != -1) { 
//        console.log('ua:',ua)
//        if (ua.indexOf('chrome') > -1) {
//        } else {
//           console.log('this is safari')
//          var newt = (t).split(" ").join("T")
//          time = new Date(newt).getTime();
//        }
//      }    
      var previous = new Date(t).getTime();
      var current = new Date().getTime();
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
      var elapsed = current - previous;
      if(isNaN(elapsed) === true) {
      } else {
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
    width: 100%;
    height: 100%;
  }
  #video1 {
    position: absolute;
    display: none;
  }  
</style>