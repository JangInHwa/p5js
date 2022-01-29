///<reference path="../../intellisence/p5.global-mode.d.ts" />

let screenWidth = document.documentElement.clientWidth;
let screenHeight = document.documentElement.clientHeight;

class Ball {
	constructor(stageWidth, stageHeight, radius, speed) {
		this.radius = radius;
		this.vx = speed;
		this.vy = speed;
		const diameter = this.radius * 2;
		this.x = random(radius, stageWidth - radius);
		this.y = random(radius, stageHeight - radius);
	}

	draw(stageWidth, stageHeight, blocks = []) {
		this.x += this.vx;
		this.y += this.vy;
		for (const block of blocks) {
			this.bounceBlock(block);
		}
		this.bounceWindow(stageWidth, stageHeight);

		ellipse(this.x, this.y, this.radius * 2);
	}

	bounceWindow(stageWidth, stageHeight) {
		const minX = this.radius;
		const maxX = stageWidth - this.radius;
		const minY = this.radius;
		const maxY = stageHeight - this.radius;

		if (this.x <= minX || maxX <= this.x) {
			this.vx *= -1;
		};
		if (this.y <= minY || maxY <= this.y) {
			this.vy *= -1;
		}
	}

	bounceBlock(block) {
		const minX = block.x - this.radius;
		const minY = block.y - this.radius;
		const maxX = block.x + block.width + this.radius;
		const maxY = block.y + block.height + this.radius;

		console.log('ok');
		if (minX < this.x && this.x < maxX && minY < this.y && this.y < maxY) {
			let xd = min(abs(this.x - minX), abs(maxX - this.y));
			let yd = min(abs(this.y - minY), abs(maxY - this.y));
			console.log(xd, yd);
			if (xd < yd) {
				this.vx *= -1;
			}
			else {
				this.vy *= -1;
			}
		}
	}
}

class Block {
	constructor(width, height, x, y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;

	}

	draw() {
		rect(this.x, this.y, this.width, this.height);
	}
}

function setup() {
	createCanvas(screenWidth, screenHeight);
	frameRate(60);
	noStroke();
	ball = new Ball(screenWidth, screenHeight, 20, 1);
	let minWH = min(screenWidth, screenHeight);
	block = new Block(minWH * 0.4, minWH * 0.4, screenWidth * 0.5 - minWH * 0.2, screenHeight * 0.5 - minWH * 0.2);
}


function draw() {

	background(0);
	fill(255, 0, 0);
	block.draw();
	fill(255);
	ball.draw(screenWidth, screenHeight, [block]);
}

function windowResized() {
	screenWidth = document.documentElement.clientWidth;
	screenHeight = document.documentElement.clientHeight;
	resizeCanvas(screenWidth, screenHeight);
}
