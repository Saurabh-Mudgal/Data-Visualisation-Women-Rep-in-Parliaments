  //womenSG
  //3830
  //3880
  //rwanda
  //4630
  //4700
  //uae
  //5430
  //5500
  //cuba
  //6220
  //6300
  //bonus
  //18300

// // The svg
// var svg = d3.select("svg"),
//   width = +svg.attr("width"),
//   height = +svg.attr("height");

// // Map and projection
// var path = d3.geoPath();
// var projection = d3.geoMercator()
//   .scale(130)
//   .center([0,40])
//   .translate([width/2, height/2]);

// // Data and color scale
// var data = d3.map();
// var colorScale = d3.scaleThreshold()
//   .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
//   .range(d3.schemeBlues[7]);

// // Load external data and boot
// d3.queue()
//   .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
//   .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) { data.set(d.code, +d.pop); })
//   .await(ready);

// function ready(error, topo) {

//   let mouseOver = function(d) {
//     d3.selectAll(".Country")
//       .transition()
//       .duration(200)
//       .style("opacity", .5)
//     d3.select(this)
//       .transition()
//       .duration(200)
//       .style("opacity", .8)
//       .style("stroke", "black")
//   }

//   let mouseLeave = function(d) {
//     d3.selectAll(".Country")
//       .transition()
//       .duration(200)
//       .style("opacity", 1)
//     d3.select(this)
//       .transition()
//       .duration(200)
//       .style("stroke", "transparent")
//   }

//   // Draw the map
//   svg.append("g")
//     .selectAll("path")
//     .data(topo.features)
//     .enter()
//     .append("path")
//       // draw each country
//       .attr("d", d3.geoPath()
//         .projection(projection)
//       )
//       // set the color of each country
//       .attr("fill", function (d) {
//         d.total = data.get(d.id) || 0;
//         return colorScale(d.total);
//       })
//       .style("stroke", "transparent")
//       .attr("class", function(d){ return "Country" } )
//       .style("opacity", .8)
//       .on("mouseover", mouseOver )
//       .on("mouseleave", mouseLeave )
//     }


    // // var margin = {top: 10, right: 30, bottom: 90, left: 40},
// // width = 1250 - margin.left - margin.right,
// // height = 550 - margin.top - margin.bottom;

// // // append the svg object to the body of the page
// // var svg = d3.select("#dataviz")
// // .append("svg")
// // .attr("width", width + margin.left + margin.right)
// // .attr("height", height + margin.top + margin.bottom)
// // .append("g")
// // .attr("transform",
// //       "translate(" + margin.left + "," + margin.top + ")");

// // // Parse the Data
// // d3.csv("./src/Data/Age_Data.csv", function(data) {

// // // X axis
// // var x = d3.scaleBand()
// // .range([ 0, width ])
// // .domain(data.map(function(d) {return d.Ages; }))
// // .padding(0.2);
// // svg.append("g")
// // .attr("transform", "translate(0," + height + ")")
// // .call(d3.axisBottom(x))
// // .selectAll("text")
// //     .attr("transform", "translate(-10,0)rotate(-45)")
// //     .style("text-anchor", "end");

// // // Add Y axis
// // var y = d3.scaleLinear()
// // .domain([0, 70])
// // .range([ height, 0]);
// // svg.append("g")
// // .call(d3.axisLeft(y));
// // })

// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

// import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
// import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// //create a blue LineBasicMaterial
// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );



// // class Website3DDemo {
// //   constructor() {
// //     this._Initialize();
// //   }

// //   _Initialize() {
// //     this._threejs = new THREE.WebGLRenderer({
// //       antialias: true,
// //       alpha: true,
// //     });
// //     this._threejs.shadowMap.enabled = true;
// //     this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
// //     this._threejs.physicallyCorrectLights = true;
// //     this._threejs.toneMapping = THREE.ACESFilmicToneMapping;
// //     this._threejs.outputEncoding = THREE.sRGBEncoding;

// //     const modelDiv = document.getElementById('dataviz');
// //     modelDiv.appendChild(this._threejs.domElement);
    

// //     this._threejs.setSize(modelDiv.offsetWidth, modelDiv.offsetHeight);

// //     window.addEventListener('resize', () => {
// //       this._OnWindowResize();
// //     }, false);

// //     const fov = 60;
// //     const aspect = modelDiv.offsetWidth / modelDiv.offsetHeight;
// //     const near = 1.0;
// //     const far = 1000.0;
// //     this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// //     this._camera.position.set(15, 15, 20);

// //     this._scene = new THREE.Scene();

// //     let light = new THREE.DirectionalLight(0xFFFFFF);
// //     light.position.set(20, 100, 10);
// //     light.target.position.set(0, 0, 0);
// //     light.castShadow = true;
// //     light.shadow.bias = -0.001;
// //     light.shadow.mapSize.width = 2048;
// //     light.shadow.mapSize.height = 2048;
// //     light.shadow.camera.near = 0.1;
// //     light.shadow.camera.far = 500.0;
// //     light.shadow.camera.near = 0.5;
// //     light.shadow.camera.far = 500.0;
// //     light.shadow.camera.left = 100;
// //     light.shadow.camera.right = -100;
// //     light.shadow.camera.top = 100;
// //     light.shadow.camera.bottom = -100;
// //     this._scene.add(light);

// //     light = new THREE.AmbientLight(0xFFFFFF);
// //     this._scene.add(light);

// //     this._controls = new OrbitControls(
// //         this._camera, this._threejs.domElement);
// //     this._controls.target.set(0, 10, 0);
// //     this._controls.update();

// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeA.fbx',
// //         'AgeA_Reaction.fbx', new THREE.Vector3(-15, 2, 0), ageA/totalCandidates);
// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeB.fbx',
// //         'AgeB_Reaction.fbx', new THREE.Vector3(-11, 0, 0), ageB/totalCandidates);
// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeC.fbx',
// //         'AgeC_Reaction.fbx', new THREE.Vector3(-5, -3, 0), ageC/totalCandidates);
// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeD.fbx',
// //         'AgeD_Reaction.fbx', new THREE.Vector3(4.5, -7.8, 0), ageD/totalCandidates);
// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeE.fbx',
// //         'AgeE_Reaction.fbx', new THREE.Vector3(19.5, -15.5, 0), ageE/totalCandidates);
// //     this._LoadAnimatedModelAndPlay(
// //         './src/Assets/3D/', 'AgeF.fbx',
// //         'AgeF_Reaction.fbx', new THREE.Vector3(46, -28.5, 0), ageF/totalCandidates);
  
// //     this._mixers = [];
// //     this._previousRAF = null;

// //     this._scrollAmount = 0.0;
// //     this._RAF();
// //   }

// //   _LoadAnimatedModelAndPlay(path, modelFile, animFile, offset, model_scaler) {
// //     const loader = new FBXLoader();
// //     loader.setPath(path);
// //     loader.load(modelFile, (fbx) => {
// //       fbx.scale.setScalar(0.2*model_scaler);
// //       fbx.traverse(c => {
// //         c.castShadow = true;
// //       });
// //       fbx.position.copy(offset);

// //       const anim = new FBXLoader();
// //       anim.setPath(path);
// //       anim.load(animFile, (anim) => {
// //         const m = new THREE.AnimationMixer(fbx);
// //         this._mixers.push(m);
// //         const idle = m.clipAction(anim.animations[0]);
// //         // this.addEventListener("mouseover", () => {
// //         //   idle.play();
// //         //   // idle.clampWhenFinished();
// //         // });
// //         idle.play();
// //       });
// //       this._scene.add(fbx);
// //     });
// //   }

// //   OnScroll(pos) {
// //     const a = 15;
// //     const b = -15;
// //     const amount = Math.min(pos / 500.0, 1.0);
// //     this._camera.position.set(a + amount * (b - a), 15, 20);
// //     this._controls.update();
// //   }

// //   _OnWindowResize() {
// //     this._camera.aspect = window.innerWidth / window.innerHeight;
// //     this._camera.updateProjectionMatrix();
// //     this._threejs.setSize(window.innerWidth, window.innerHeight);
// //   }

// //   _Step(timeElapsed) {
// //     const timeElapsedS = timeElapsed * 0.001;
// //     if (this._mixers) {
// //       this._mixers.map(m => m.update(timeElapsedS));
// //     }
// //   }

// //   _RAF() {
// //     requestAnimationFrame((t) => {
// //       if (this._previousRAF === null) {
// //         this._previousRAF = t;
// //       }

// //       this._RAF();

// //       this._threejs.render(this._scene, this._camera);
// //       this._Step(t - this._previousRAF);
// //       this._previousRAF = t;
// //     });
// //   }
// // }


// // let _APP = null;

// // window.addEventListener('DOMContentLoaded', () => {
// //   _APP = new Website3DDemo();
// // });

// // window.addEventListener('scroll', (e) => {
// //   _APP.OnScroll(window.scrollY);
// // });






// // // set the dimensions and margins of the graph
// // var margin = {top: 10, right: 30, bottom: 90, left: 40},
// //     width = 1250 - margin.left - margin.right,
// //     height = 550 - margin.top - margin.bottom;

// // // append the svg object to the body of the page
// // var svg = d3.select("#dataviz")
// //   .append("svg")
// //     .attr("width", width + margin.left + margin.right)
// //     .attr("height", height + margin.top + margin.bottom)
// //   .append("g")
// //     .attr("transform",
// //           "translate(" + margin.left + "," + margin.top + ")");

// // // Parse the Data
// // d3.csv("./src/Data/Age_Data.csv", function(data) {

// //     // X axis
// //     var x = d3.scaleBand()
// //     .range([ 0, width ])
// //     .domain(data.map(function(d) {return d.Ages; }))
// //     .padding(0.2);
// //     svg.append("g")
// //     .attr("transform", "translate(0," + height + ")")
// //     .call(d3.axisBottom(x))
// //     .selectAll("text")
// //         .attr("transform", "translate(-10,0)rotate(-45)")
// //         .style("text-anchor", "end");

// //     // Add Y axis
// //     var y = d3.scaleLinear()
// //     .domain([0, 70])
// //     .range([ height, 0]);
// //     svg.append("g")
// //     .call(d3.axisLeft(y));

// //     // Bars
// //     svg.selectAll("mybar")
// //     .data(data)
// //     .enter()
// //     .append("rect")
// //         .attr("x", function(d) { return x(d.Ages); })
// //         .attr("width", x.bandwidth())
// //         .attr("fill", "#F0F8FF")
// //         // no bar at the beginning thus:
// //         .attr("height", function(d) { return height - y(0); }) // always equal to 0
// //         .attr("y", function(d) { return y(0); })

// //     // Animation
// //     svg.selectAll("rect")
// //     .transition()
// //     .duration(800)
// //     .attr("y", function(d) { return y(d.Value); })
// //     .attr("height", function(d) { return height - y(d.Value); })
// //     .delay(function(d,i){console.log(i) ; return(i*100)})
// //     console.log(data);

// // })