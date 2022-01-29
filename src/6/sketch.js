///<reference path="../../intellisence/p5.global-mode.d.ts" />

const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function setup() {
	createCanvas(screenWidth, screenHeight);
	// graphWidth = 200;
	// graphHeight = 200;
	// fill(0);
	// rect(0, 0, graphWidth, graphHeight);
	// rect(0, graphHeight, graphWidth, graphHeight);
	// stroke(255);
	// for (let i = 0; i < graphWidth; i++) {
	// 	point(i, graphHeight - noise(i / graphWidth * 10) * graphHeight);
	// 	point(i, graphHeight * 2 - random() * graphHeight);
	// }
	console.log(pixelDensity());
}

let xinc = 0.02;
let yinc = 0.01;
let start = 0.0;
let xoff = start;

function draw() {
	fill(0);
	rect(0, 0, 200, 200);
	stroke(255);
	noFill();
	beginShape();
	let yoff = 0;
	for (let i = 0; i < 200; i++) {
		var y = noise(xoff + noise(yoff)) * 200;
		vertex(i, y);
		yoff += yinc;
	}
	endShape();
	xoff += xinc;
}
