import * as THREE from '../three.module.js';

document.addEventListener("DOMContentLoaded", () => {
	const scene = new THREE.Scene();
	
	const geometry = new THREE.BoxGeometry(1,1,1);
	const material = new THREE.MeshBasicsMaterial({color: "#0000FF"});
	const cube = new THREE.Mesh(geometry,material);
	
	scene.add(cube);
	cube.position.set(0,0,-2);
	cube.rotation.set(0,Math.Pi/4, 0);
	
	const camera = new THREE.WebGLRenderer();
	renderer.setSize(500,500);
	renderer.render(scene, camera);
	
	const video = document.createElement("video");
	navigator.mediaDevice.getUserMedia({video: true}).then((stream) => {
		video.srcObject = stream;
		video.play();
	});
	
	video.style.position = "absolute";
	video.style.width = renderer.domElement.width;
	renderer.domElement.style.position = "absolute";
	
	document.body.appendChild(video);
	document.body.appendChild(renderer.domElement);
});
