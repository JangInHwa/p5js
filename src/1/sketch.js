///<reference path="../../intellisence/p5.global-mode.d.ts" />


class Ball {
	constructor(x, y, dx, dy, w) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.w = w;
	}
}

const screenWidth = window.screen.availWidth;
const screenHeight = window.screen.availHeight;
const ballSize = 40;

let balls = [
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(0, Math.random() * screenHeight, Math.random(), Math.random() * 2 - 1, ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(Math.random() * screenWidth, 0, Math.random() * 2 - 1, Math.random(), ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(screenWidth, Math.random() * screenHeight, Math.random() - 1, Math.random() * 2 - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
	new Ball(Math.random() * screenWidth, screenHeight, Math.random() * 2 - 1, Math.random() - 1, ballSize),
]

function setup() {
	createCanvas(screenWidth, screenHeight)
	console.log(screenWidth, screenHeight);
	background(0, 238, 53)
}

function draw() {
	for (const ball of balls) {
		ellipse(ball.x, ball.y, ball.w);
		ball.x += ball.dx;
		ball.y += ball.dy;
	}
}
