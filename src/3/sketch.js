///<reference path="../../intellisence/p5.global-mode.d.ts" />

const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function setup() {
	createCanvas(screenWidth, screenHeight);
}

x = 0

function draw() {
	ellipse(mouseX, mouseY, 100)
}

function mousePressed() {
	background(random(255), random(255), random(255))
}
