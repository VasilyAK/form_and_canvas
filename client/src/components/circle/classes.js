export class Circle {
	constructor (options) {
		this.x = options.x;
		this.y = options.y;
		this.radius = options.radius;
		this.startAngle = options.startAngle;
		this.endAngle = options.endAngle;
		this.anticlockwise = options.anticlockwise;
	}

	drow (ctx, imgData) {
		ctx.strokeStyle = "rgba(255, 255, 242, 0.2)";
		ctx.beginPath();
		ctx.moveTo(this.x+this.radius, this.y);
		ctx.arc(this.x, this.y, this.radius+5, this.startAngle, this.endAngle, this.anticlockwise);
		ctx.lineWidth = 4;
		ctx.stroke();

		ctx.strokeStyle = "rgba(255, 255, 242, 0.25)";
		ctx.beginPath();
		ctx.moveTo(this.x+this.radius, this.y);
		ctx.arc(this.x, this.y, this.radius+2, this.startAngle, this.endAngle, this.anticlockwise);
		ctx.lineWidth = 4;
		ctx.stroke();

		ctx.fillStyle = "rgba(255, 255, 242, 0.3)";
		ctx.beginPath();
		ctx.moveTo(this.x+this.radius, this.y);
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
		ctx.fill();
		if (imgData) ctx.drawImage(imgData.src, imgData.x, imgData.y, imgData.width, imgData.height, this.x-this.radius+3, this.y-this.radius+3, 2*this.radius-6, 2*this.radius-6);
	}
}

export class ImageData {
	constructor (options) {
		this.src = options.src;
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;
		this.timer = options.timer; // timer для смены спрайта
		this.step = options.step; // step указывает на направление в строке спрайта: left, right
		this.status = options.status; // status указывает на строку в спрайте
		this.statusArr = options.statusArr;
	}


	nextFrame () {
		this.y = this.height*this.statusArr.findIndex((item) => item === this.status);
		switch (this.step) {
			case "right":
				this.x += this.width;
				if(this.x === this.width*4) this.step = "left";
				break;
			case "left":
				this.x -= this.width;
				if(this.x === 0) this.step = "right";
				break;
		}
	}
}