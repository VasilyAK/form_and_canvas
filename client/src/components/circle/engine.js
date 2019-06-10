import {Circle, ImageData} from "./classes";
import config from "./config";

const game = {
	canvasHeight: null,
	canvasWidth: null,
	ctx: null,
	outerCircle: null,
	innerCircle: null,
	pursuer: null,
	man: null,
	fireball: null,


	setCanvasProperties (canvas) {
		this.canvasHeight = config.canwasSize.height;
		this.canvasWidth = config.canwasSize.width;
		canvas.setAttribute("height", config.canwasSize.height);
		canvas.setAttribute("width", config.canwasSize.width);
		this.ctx = canvas.getContext('2d');
	},


	start: function () {
		this.man = new ImageData(config.man);
		this.man.src = new Image();
		this.man.src.src = require("./img/sprite.png");

		this.fireball = new ImageData(config.fireball);
		this.fireball.src = new Image();
		this.fireball.src.src = require("./img/fireball.png");

		this.outerCircle = new Circle(config.outerCircle);
		this.innerCircle = new Circle(config.innerCircle);
		this.pursuer = new Circle(config.pursuer);
		this.animation.init();
	},


	setNewCoords (x, y) {
		// устанавливает координаты мышки - преследователя
		this.pursuer.x = x;
		this.pursuer.y = y;

		//устанавливаем координаты кружка с человечком
		const newInnerCircleCoordsByPursuer = calcNewInnerCircleCoords(
			this.innerCircle.x,
			this.innerCircle.y,
			this.innerCircle.radius,
			this.pursuer.x,
			this.pursuer.y,
			this.pursuer.radius,
			10,
			"pursuer"
		);

		const newInnerCircleCoordsByOuterCircle = calcNewInnerCircleCoords(
			this.innerCircle.x,
			this.innerCircle.y,
			this.innerCircle.radius,
			this.outerCircle.x,
			this.outerCircle.y,
			this.outerCircle.radius,
			20,
			"outerCircle"
		);

		this.innerCircle.x += newInnerCircleCoordsByPursuer.dX + newInnerCircleCoordsByOuterCircle.dX;
		this.innerCircle.y += newInnerCircleCoordsByPursuer.dY + newInnerCircleCoordsByOuterCircle.dY;

		// устанавливаем статус мэна
		if (newInnerCircleCoordsByPursuer.dX > 0) {
			if (this.man.status !== "runRight") {
				this.man.status = "runRight";
				clearInterval(this.man.timer);
				this.man.timer = setInterval(()=>{
					game.man.nextFrame()
				}, 100);
			}
		} else if (newInnerCircleCoordsByPursuer.dX < 0) {
			if (this.man.status !== "runLeft") {
				this.man.status = "runLeft";
				clearInterval(this.man.timer);
				this.man.timer = setInterval(() => {
					game.man.nextFrame()
				}, 100);
			}
		} else if (Math.sqrt((x-this.outerCircle.x)*(x-this.outerCircle.x) + (y-this.outerCircle.y)*(y-this.outerCircle.y)) <= this.pursuer.radius + this.outerCircle.radius) {
			if (this.man.status !== "fear") {
				this.man.status = "fear";
				clearInterval(this.man.timer);
				this.man.timer = setInterval(() => {
					game.man.nextFrame()
				}, 400);
			}
		} else {
			if (this.man.status !== "wait") {
				this.man.status = "wait";
				clearInterval(this.man.timer);
				this.man.timer = setInterval(() => {
					game.man.nextFrame()
				}, 400);
			}
		}

		// вспомогательная функция для расчетов
		// dr - расстояние между кругами
		function calcNewInnerCircleCoords (X, Y, R, x, y, r, dr, modal) {
			let condition = false;
			let allowableDistanse = 0;
			switch (modal) {
				case "pursuer":
					allowableDistanse = R+r+dr;
					condition = Math.sqrt((x-X)*(x-X) + (y-Y)*(y-Y)) < allowableDistanse;
					break;
				case "outerCircle":
					allowableDistanse = r-R-dr;
					condition = Math.sqrt((x-X)*(x-X) + (y-Y)*(y-Y)) > allowableDistanse;
					break;
			}

			if (condition) {
				const cos = (x-X)/Math.sqrt((x-X)*(x-X) + (y-Y)*(y-Y));
				let sin = Math.sqrt(1 - cos*cos);
				if (Y-y < 0) sin = -sin;

				return {
					dX: x - (allowableDistanse)*cos - X,
					dY: y + (allowableDistanse)*sin - Y
				};
			}
			return {dX: 0, dY:0}
		}
	},


	animation: {
		init: function () {
			game.man.timer = setInterval(()=>{
				game.man.nextFrame()
			}, 400);
			game.fireball.timer = setInterval(()=>{
				game.fireball.nextFrame()
			}, 100);
			game.animation.loopDraw();
		},

		loopDraw: function () {
			game.ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
			game.innerCircle.drow(game.ctx, game.man);
			game.pursuer.drow(game.ctx, game.fireball);
			game.animation.request = requestAnimationFrame(game.animation.loopDraw);
		},

		request: null,
		timer: null
	}
};

export default game;