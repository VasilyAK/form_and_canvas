import "./Circle.css";
import React, {Component} from "react";

import {Link} from "react-router-dom"

import game from "./engine";

class Circle extends Component {
	constructor (props) {
		super (props);
		this.canvas = React.createRef();
		this.mouseMove = this.mouseMove.bind(this);
	}

	mouseMove(e){
		const x = e.clientX - this.canvas.current.getBoundingClientRect().left;
		const y = e.clientY - this.canvas.current.getBoundingClientRect().top;
		game.setNewCoords(x, y)
	}

	componentDidMount () {
		game.setCanvasProperties(this.canvas.current);
		game.start();
	}

	render () {
		return (
			<>
				<canvas
					ref={this.canvas}
					onMouseMove={this.mouseMove}
				/>
				<div className="main-link">
					<Link to="/">Перейти к заданию 1</Link>
				</div>
			</>
		)
	}
}

export default Circle;