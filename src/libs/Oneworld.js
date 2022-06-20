/*
	author: Sylwester Mielniczuk
	email: sylwester@workwork.fun
*/
/* Misc methods */
/* eslint-disable */

console.log('Oneworld.js -- imported')
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
/* Sky */
import { SkyPresets } from './skyConfigs.js'
import { SkyBuild } from './skyBuild.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js';

import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader.js';

// import VRControl from 'three-mesh-ui/examples/utils/VRControl.js';
// import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
// import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
// import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';


var Methods = {
  addSquare: function(scene) {
//  var geo = new THREE.BoxBufferGeometry(2, 2, 2);
//  var edges = new THREE.EdgesGeometry( geo );  
//  var sq = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
//  squares.push(sq)  
//  sq.name = "sq_"+squares.length;
//  
//  sq.position.x = wand.position.x;
//  sq.position.y = wand.position.y;
//  sq.position.z = wand.position.z;
//  scene.add(sq);    
  },
  
  addControls(camera, renderer) {

  // Controls
  //-------------------------------------------------  

    var controls = new OrbitControls( camera, renderer.domElement );
    //controls.addEventListener( 'change', animate ); // use if there is no animation loop
    controls.minDistance = 0;
    controls.maxDistance = 150;
    controls.target.set( 0, 3, 0);
    // Don't let to go below the ground
    controls.maxPolarAngle = Math.PI/2;
    
//    controls.addEventListener( 'start', function() {
//      //console.log('controls start')
//      controlsUse = true;
//    } );
//  
//    controls.addEventListener( 'end', function() {
//      console.log('controls end', camera.position)
//      newcam = camera.position;
//      controlsUse = false;
//    } );
    
    controls.update();
    
//    w.controls = controls;


  //				// controls
  //
  //				controls = new OrbitControls( camera, renderer.domElement );
  //
  //				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
  //
  //				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  //				controls.dampingFactor = 0.05;
  //
  //				controls.screenSpacePanning = false;
  //
  //				controls.minDistance = 100;
  //				controls.maxDistance = 500;
  //
  //				controls.maxPolarAngle = Math.PI / 2;      

    
  },
  
  addModel(scene,f,n,pos,sc,rot,cb) {
    //var n = f.split("/").pop().split(".")[0]
    var loader = new GLTFLoader();
      loader.load(f, function ( gltf ) {  
        var r = gltf.scene;
          r.traverse(function(o) {
            if(o.isMesh) { 
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });
        r.position.set(pos.x,pos.y,pos.z)
        r.scale.set(sc.x,sc.y,sc.z)
        r.rotation.set(rot.x,rot.y,rot.z)
        r.name = n;
        r.deltaX;
        r.deltaY;
        r.oldX = r.position.x;
        r.oldZ = r.position.z;
        r.startX = 0;
        r.startZ = 0;
        r.oldRad;
        r.radX;
        r.radY;
        r.deg = 15;
        r.oldDeg;      
        if(cb) {
          cb(r)
        }
        scene.add(r)
      }, undefined, function ( e ) {
          console.error( e );
      } );   
  },  
  
  
  loadGModel: function(scence,f,n,sc,pos,rot,cb) {
    var l = new GLTFLoader();
    l.load( f, function ( gltf ) {  
      var r = gltf.scene;
        r.traverse(function(o) {
          if(o.isMesh) o.castShadow = true;
        }); 
        r.position.set(pos.x,pos.y,pos.z)
        r.scale.set(sc.x,sc.y,sc.z)
        r.rotation.set(rot.x,rot.y,rot.z)
      r.name = n;
      if(cb) {
        cb(r)
      }      
      scene.add(r)
      //things[r.name] = r;
    }, undefined, function ( e ) {
        console.error( e );
    } ); 
  },

  loadSVG: function(scene) {
      //this.loadSVG(this.scene,'assets/test.svg','testSVG') 
      var loader = new SVGLoader();
      // load a SVG resource
      loader.load(
          // resource URL
          'uploads/svg/sad.svg',
          // called when the resource is loaded
          function ( data ) {
              var paths = data.paths;
              var group = new THREE.Group();
              for ( var i = 0; i < paths.length; i ++ ) {
                  var path = paths[ i ];
                  var material = new THREE.MeshBasicMaterial( {
                      color: path.color,
                      side: THREE.DoubleSide,
                      depthWrite: false
                  } );
                  var shapes = path.toShapes( true );
                  for ( var j = 0; j < shapes.length; j ++ ) {
                      var shape = shapes[ j ];
                      var geometry = new THREE.ShapeBufferGeometry( shape );
                      var mesh = new THREE.Mesh( geometry, material );
                      console.log('j',j)
                      group.add( mesh );
                  }
              }
              group.name = "Svg1"
              group.position.x = 0;
              group.position.y = 0;
              group.position.z = 1;
              scene.add( group );
          },
          // called when loading is in progresses
          function ( xhr ) {
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% of '+xhr.total+' loaded' );
          },
          // called when loading has errors
          function ( error ) {
              console.log( 'An error happened',error );
          }
      );    
  },

  addLights: function(scene) {
    // LIGHTS
    // lightse
    //  var light1 = new THREE.HemisphereLight(0xffffff, 0x444444);
    //  light1.position.set(0, 10, 0);
    //  //light1.castShadow = true;
    //  //Set up shadow properties for the light
    ////  light1.shadow.mapSize.width = 512;  // default
    ////  light1.shadow.mapSize.height = 512; // default
    ////  light1.shadow.camera.near = 0.5;    // default
    ////  light1.shadow.camera.far = 500;     // default  
    //  scene.add(light1);
    //  
    //  
    //  var light2 = new THREE.DirectionalLight(0xffffff);
    //  light2.position.set(0, 50, 10);
    //  light2.castShadow = true;
    //  light2.shadow.mapSize.width = 512;  // default
    //  light2.shadow.mapSize.height = 512; // default
    //  light2.shadow.camera.near = 0.5;    // default
    //  light2.shadow.camera.far = 10;     // default    
    //  scene.add(light2);
    var ambientLight = new THREE.AmbientLight(0x555555)
    //scene.add(ambientLight);
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.1 );
    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 1230, 0 );
    hemiLight.name = "hemiLight";
    scene.add( hemiLight );
    //var hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
    //scene.add( hemiLightHelper );
    //
    var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.color.setHSL( 0.1, 1, 0.95 );
    dirLight.position.set( 1, 0.25, -0.15 );
    dirLight.position.multiplyScalar( 30 );
    dirLight.name = "dirLight";
    scene.add( dirLight );
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 4096;
    dirLight.shadow.mapSize.height = 4096;
    var d = 50;
    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = - d;
    dirLight.shadow.camera.far = 4096;
    dirLight.shadow.bias = - 0.0001;
    var dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 );
    //scene.add( dirLightHeper );
    // point light
    var pointLight1 = new THREE.PointLight(0xff0000, 2, 50)
    pointLight1.position.set(0,1,15)
    pointLight1.name = "plight1";
    scene.add(pointLight1);
  },
  addCurve: function(scene,p) {
      var ma = new THREE.LineDashedMaterial( {
          color: 0xf1da36,
          linewidth: 3,
          scale: 1,
          dashSize: 3,
          gapSize: 4,
      } );    
      //var ma = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      var points = [];
      for(var i=0; i< p.length; i++) {
        points.push( new THREE.Vector3( p[i].x, p[i].y,p[i].z) );
      }
      var geometry = new THREE.BufferGeometry().setFromPoints( points );
      var line = new THREE.Line( geometry, ma );
      line.name = "Line";
      line.visible = false;
      // if you need just last bit of line
      //if(scene.getObjectByName("Line")) scene.remove(scene.getObjectByName("Line"))
      scene.add( line );  
  },
  addWand: function(scene) {
    var wand_geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    var wand_edges = new THREE.EdgesGeometry( wand_geometry );  
    var wand = new THREE.LineSegments( wand_edges, new THREE.LineBasicMaterial( { color: 0xff0000 } ) );
    wand.name = "wand";
    scene.add(wand);
    wand.visible = true;
  },
  addSky: function(scene) {
    // - Sun - Helper - day, night, dark, moon, cold
    var fxC = SkyPresets.cold;
    var sunSphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(20000, 36, 38),
      new THREE.MeshBasicMaterial({
        color: 0xffffff
      })
    );  
    sunSphere.position.y = 10;
    sunSphere.visible = true;
    sunSphere.name = "sunSphere";
    SkyBuild.build(scene,sunSphere,fxC)    
  },
  addGround: function(scene,file,scX,scZ) {
    var groundTx = new THREE.TextureLoader().load(file);
    groundTx.wrapS = THREE.RepeatWrapping;
    groundTx.wrapT = THREE.RepeatWrapping;
    //groundTx.repeat.set( 25,25 );
    groundTx.anisotropy = 4;
    groundTx.repeat.set(scX,scZ);
    groundTx.encoding = THREE.sRGBEncoding;
    var groundM = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      color: 0xffffff,
      metalness: 0.2,
      bumpScale: 0.0005,
      map: groundTx
    });
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(250, 250), groundM);
    ground.position.y = -0.05;
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.speed = 0.01;
    ground.name = "ground";
    //ground.castShadow = true; //default is false
    scene.add(ground)  
  },
  addSprite(scene,file,name,alpha) {
    var tl = new THREE.TextureLoader();
    tl.load(file, function( tx ) {
          var ma = new THREE.SpriteMaterial( { map: tx, color: 0xffffff } );
          var w = ma.map.image.width/2;
          var h = ma.map.image.height/2;
          var r = new THREE.Sprite( ma );
          r.center.set(0.5,0.5);
          r.name = name;
          r.scale.set( w, h, 1 );
          r.position.set( 0, 0, 1 ); // center 
          scene.add( r );
          var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
          tl.from(r.material,{opacity:0,duration:3,delay:3},"+=1")
          tl.to(r.material,{opacity:0,duration:3},"+=4")
          //gsap.from(r.material,{opacity:0,duration:1,delay:2})
      });
  },
  addText: function() {
  var loader = new THREE.FontLoader();
  loader.load( '.././assets/fonts/helvetiker_regular.typeface.json', function ( font ) {
    var xMid, text;
    var color = 0xFF0000;
//    var subdivisions = 6;
//    var recursion = 1;
//
//    var points = GeometryUtils.hilbert3D( new THREE.Vector3( 0, 0, 0 ), 25.0, recursion, 0, 1, 2, 3, 4, 5, 6, 7 );
//    var spline = new THREE.CatmullRomCurve3( points );
//
//    var samples = spline.getPoints( points.length * subdivisions );
//    var geometrySpline = new THREE.BufferGeometry().setFromPoints( samples );
//
//    var line = new THREE.Line( geometrySpline, new THREE.LineDashedMaterial( { color: 0xffffff, dashSize: 1, gapSize: 0.5 } ) );
//    line.computeLineDistances();
//
//    objects.push( line );
//    scene.add( line );
//
//    var geometryBox = box( 50, 50, 50 );
//
//    var lineSegments = new THREE.LineSegments( geometryBox, new THREE.LineDashedMaterial( { color: 0xffaa00, dashSize: 3, gapSize: 1 } ) );
//    lineSegments.computeLineDistances();
//    
//    objects.push( lineSegments );
//    scene.add( lineSegments );    
//    var matDark = new THREE.LineDashedMaterial( {
//        color: color,
//        linewidth: 1,
//        scale: 2,
//        dashSize: 3,
//        gapSize: 10,
//        side: THREE.DoubleSide
//    } );    
//
//    var matLight = new THREE.LineDashedMaterial( {
//        color: color,
//        linewidth: 1,
//        scale: 2,
//        dashSize: 3,
//        gapSize: 10,
//        side: THREE.DoubleSide
//    } );  
    var matDark = new THREE.LineBasicMaterial( {
        color: color,
        linewidth: 3,
        side: THREE.DoubleSide
    } );
    var matLite = new THREE.MeshBasicMaterial( {
        color: color,
        transparent: true,
        opacity: 3,
        side: THREE.DoubleSide
    } );
    var message = "WORKWORK.FUN";
    var shapes = font.generateShapes( message, 4.5 );
    var geometry = new THREE.ShapeBufferGeometry( shapes );
    geometry.computeBoundingBox();
    xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    geometry.translate( xMid, 0, 0 );
    // make shape ( N.B. edge view not visible )
    text = new THREE.Mesh( geometry, matLite );
    text.position.z = - 150;
    text.name = 'text'
    //scene.add( text );
    text.visible = false;
    var holeShapes = [];
    for ( var i = 0; i < shapes.length; i ++ ) {
        var shape = shapes[ i ];
        if ( shape.holes && shape.holes.length > 0 ) {
            for ( var j = 0; j < shape.holes.length; j ++ ) {
                var hole = shape.holes[ j ];
                holeShapes.push( hole );
            }
        }
    }
    shapes.push.apply( shapes, holeShapes );
    var lineText = new THREE.Object3D();
    lineText.name = 'lineText';
    for ( var i = 0; i < shapes.length; i ++ ) {
        var shape = shapes[ i ];
        var points = shape.getPoints();
        var geometry = new THREE.BufferGeometry().setFromPoints( points );
        geometry.translate( xMid, 0, 0 );
        var lineMesh = new THREE.Line( geometry, matDark );
        lineMesh.name = 'lineMesh'+i;
        lineMesh.rotation.y = Math.random()*100;
        lineText.add( lineMesh );
    }
    scene.add( lineText );
    });
  },
  loadVR: function(w,scene,file) {
    console.log("loadVR",w,scene,file)

  },

  loadModel: function(w,scene,modelFile,modelName,position,scale,animPosition,speed,rotation) {
  var loader = new GLTFLoader();
  loader.load(modelFile,
    function (gltf) {
      var r = gltf.scene
      w.mixers[modelName] = new THREE.AnimationMixer(r);
      var mixer = w.mixers[modelName];
//      for (var a in gltf.animations) {
//        mixer.clipAction(gltf.animations[a]).play()
//      }
    console.log('gltf.animations[0]: ', gltf.animations)
      r.position.x = position.x;
      r.position.y = position.y;
      r.position.z = position.z;
      r.rotation.x = rotation.x;
      r.rotation.y = rotation.y;
      r.rotation.z = rotation.z;
      r.scale.set(scale.x,scale.y,scale.z);
      r.castShadow = true;
      r.receiveShadow = true;    
      r.name = modelName;
      r.speed = speed.speed;
      r.animated = animPosition;//Math.ceil(Math.random()*2);
      /* extra props for walking */
      r.deltaX;
      r.deltaY;
      r.oldX = r.position.x;
      r.oldZ = r.position.z;
      r.startX = position.x;
      r.startZ = position.z;
      r.rad;
      r.deg = 15;
      r.cirR = 5 + Math.random()*25;
      if(gltf.animations[animPosition] ) {
        mixer.clipAction(gltf.animations[animPosition]).play()
      }   
      r.traverse(function(o) {
        if(o.isMesh) o.castShadow = true;
      } )
      scene.add(r)},             
//      setTimeout(function() { 
//        if(gltf.animations[animPosition] ) {
//          mixer.clipAction(gltf.animations[animPosition]).play()
//        }        
//        scene.add(r)},             
//      100+Math.random()*2000);
//    },
    function (xhr) {
      var pr = xhr.loaded / xhr.total * 100;
      //console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      if(pr == 100) {
         //console.log(modelName, 'loaded')
      }
    },
    function (error) {
      console.log(error);
    }
  );
}    
}
export let Owo = Methods;