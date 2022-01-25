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
	r = random(255)
	g = random(255)
	b = random(255)
	background(r, g, b)
	fill(255 - r, 255 - g, 255 - b)
}
