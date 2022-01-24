///<reference path="../../intellisence/p5.global-mode.d.ts" />

const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function setup() {
	createCanvas(screenWidth, screenHeight)
}

function draw() {
	if (mouseIsPressed) {
		fill(0);
		stroke(255)
	}
	else {
		fill(255);
		stroke(0)
	}
	ellipse(mouseX, mouseY, 60);
}
