///<reference path="../../intellisence/p5.global-mode.d.ts" />

const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function setup() {
	createCanvas(screenWidth, screenHeight);
}


function draw() {
	line(pmouseX, pmouseY, mouseX, mouseY);
}
