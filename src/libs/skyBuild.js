/*
	author: Sylwester Mielniczuk
	email: flaboy.com@gmail.com
	
	very simple audio for game

*/

import { Sky } from 'three/examples/jsm/objects/Sky.js';

var mySky = {
  
  sky: new Sky(),
  
  build: function(scene, sunSphere, fxC) {
    
    var sky = this.sky;
    scene.add(sunSphere);
    
    //console.log('hello:',fxC)
    sky.scale.setScalar(450000);
    sky.name = "mysky"
    scene.add(sky);
    
    var uniforms = sky.material.uniforms;
    // 10; 2; 0.005; 0.8; 1; 0.49; 0.25
    uniforms["turbidity"].value = 20;
    uniforms["rayleigh"].value = 0.816;
    uniforms["mieCoefficient"].value = 0.065;
    uniforms["mieDirectionalG"].value = 0.995;
    //uniforms["luminance"].value = 0.7;

    var distance = 500;
    var theta = Math.PI * (fxC.inclination - 0.5);
    var phi = 2 * Math.PI * (fxC.azimuth - 0.5);
    

    sunSphere.position.x = distance * Math.cos(phi);
    sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
    sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);

    uniforms["sunPosition"].value.copy(sunSphere.position);  
    
    
  }

//  
//  // - Sun - Helper
//  sunSphere = new THREE.Mesh(
//    new THREE.SphereBufferGeometry(20000, 16, 8),
//    new THREE.MeshBasicMaterial({
//      color: 0xffffff
//    })
//  );
//  
//  sunSphere.position.y = -700000;
//
//  sunSphere.visible = false;
//  sunSphere.name = "sunSphere";
//  scene.add(sunSphere);
//
  
  

}

export let SkyBuild = mySky;

