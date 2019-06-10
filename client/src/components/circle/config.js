const config = {
	canwasSize: {
		height: 600,
		width: 600
	},

	outerCircle: {
		x: 300,
		y: 300,
		radius: 180,
		startAngle: 0,
		endAngle: 2*Math.PI,
		anticlockwise: true
	},

	innerCircle: {
		x: 300,
		y: 300,
		radius: 35,
		startAngle: 0,
		endAngle: 2*Math.PI,
		anticlockwise: true
	},

	pursuer: {
		x: 200,
		y: 150,
		radius: 20,
		startAngle: 0,
		endAngle: 2*Math.PI,
		anticlockwise: true
	},

	man: {
		src: null,
    x: 0,
    y: 0,
		width: 150,
    height: 150,
		timer: null,
    step: "right",
		status: "wait",
		statusArr: ["wait", "fear", "runLeft", "runRight"]
	},

	fireball: {
		src: null,
		x: 0,
		y: 0,
		width: 150,
		height: 150,
		timer: null,
		step: "right",
		status: "fire",
		statusArr: ["fire"]
	}
};

export default config;