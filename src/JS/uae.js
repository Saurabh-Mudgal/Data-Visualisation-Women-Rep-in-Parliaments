
// Compute

let female = 16.2;
let male = 100-female;
let change = 10.9;

let totalCandidates = female + male;

// Display

d3.select(".topicFive").text("The country of Palau, with previously 0 female MLAs saw a " + change + "% astounding increase") ;

// Rendering


import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

// Changes:
// camera.set
// function call - parameters
// the render function itself
// position pos parameter
// OnScroll pos if else fade statements

class gender3DDemo {
    constructor() {
    this._Initialize();
    }

    _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.physicallyCorrectLights = true;
    this._threejs.toneMapping = THREE.ACESFilmicToneMapping;
    this._threejs.outputEncoding = THREE.sRGBEncoding;

    const modelDiv = document.getElementById('uae');
    modelDiv.appendChild(this._threejs.domElement);
    

    this._threejs.setSize(modelDiv.offsetWidth, modelDiv.offsetHeight);

    window.addEventListener('resize', () => {
        this._OnWindowResize();
    }, false);

    const fov = 60;
    const aspect = modelDiv.offsetWidth / modelDiv.offsetHeight;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    this._camera.position.set(0, 15, 20);

    this._scene = new THREE.Scene();

    let light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    this._scene.add(light);

    light = new THREE.AmbientLight(0xFFFFFF);
    this._scene.add(light);

    this._controls = new OrbitControls(
        this._camera, this._threejs.domElement);
    this._controls.target.set(0, 10, 0);
    this._controls.update();


    this._LoadAnimatedModelAndPlay(
        './src/Assets/3D/', 'claire.fbx',
        'claire_reaction.fbx', new THREE.Vector3(0,0,0), female/totalCandidates, -15, 4, 4, 4, './src/Assets/flagThailand.jpg');
    this._LoadAnimatedModelAndPlay(
        './src/Assets/3D/', 'phil.fbx',
        'phil_Reaction.fbx', new THREE.Vector3(0,0,0), male/totalCandidates, 15, 4, 4, 4, './src/Assets/flagThailand.jpg');


    
    this._mixers = [];
    this._previousRAF = null;

    this._scrollAmount = 0.0;
    this._RAF();
    }

    _LoadAnimatedModelAndPlay(path, modelFile, animFile, offset, model_scaler, modelTrans, labelScale, labelX, labelY, path2) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(modelFile, (fbx) => {
        fbx.scale.setScalar(0.1*model_scaler);
        fbx.traverse(c => {
        c.castShadow = true;
        });
        fbx.position.copy(offset);
        fbx.translateX(modelTrans);

        const anim = new FBXLoader();
        anim.setPath(path);
        anim.load(animFile, (anim) => {
          const m = new THREE.AnimationMixer(fbx);
          this._mixers.push(m);
          const idle = m.clipAction(anim.animations[0]);
        
          idle.play();

        });
        this._scene.add(fbx);
    });

    const geometry = new THREE.CylinderGeometry(labelScale, labelX, labelY, 9);
    const material = new THREE.TextureLoader().load(path2);
    const star = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: material }));

    star.translateX(modelTrans);
    star.translateY(-3);

    this._scene.add(star);
    }



    OnScroll(pos) {

    const checkpoint = 9895;
    const transpoint = 9760;
    const checkpoint2 = 9570;
    const transpoint2 = 9135;
    let alph = 1;
    
    if(pos > checkpoint){
      alph = 0;
    }
    else if(pos > transpoint){
      alph = ((checkpoint-pos)/(checkpoint-transpoint));
    }
    // ENTRY TRANSITION    
    else if(pos <= transpoint2){
      alph = 0;
    }
    else if(pos > transpoint2){
      alph = 1-((checkpoint2-pos)/(checkpoint2-transpoint2));
    }
    document.querySelector("#uae").style.opacity = alph;
    }

    _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth, window.innerHeight);
    }

    _Step(timeElapsed) {
    const timeElapsedS = timeElapsed * 0.001;
    if (this._mixers) {
        this._mixers.map(m => m.update(timeElapsedS));
    }
    }

    _RAF() {
    requestAnimationFrame((t) => {
        if (this._previousRAF === null) {
        this._previousRAF = t;
        }

        this._RAF();

        this._threejs.render(this._scene, this._camera);
        this._Step(t - this._previousRAF);
        this._previousRAF = t;
    });
    }
}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
    _APP = new gender3DDemo();
});

window.addEventListener('scroll', (e) => {
    _APP.OnScroll(window.scrollY);
});