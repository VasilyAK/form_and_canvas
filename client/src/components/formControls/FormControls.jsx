import "./FormControls.css";
import React from "react";

import Button from "react-bootstrap/Button";

const FormControl = (props) => {
	let selectedLecenseText = "";
	if (props.focus !== 0) selectedLecenseText= `Selected plan: #${props.focus}`;

	const buyLicense = () => {
		//функция ниже ничего не делает, просто заглушка
		function sendToServer () {
			return {
				id: props.id,
				quantity: props.numberOfLicenses
			}
		}
	};

	return (
		<div className="form__controls">
			<div className="form__controls-total">
				<div className="form__controls-total_span1">total</div>
				<div className="form__controls-total_span2">:</div>
				<div className="form__controls-total_span3">${props.numberOfLicenses*props.price}</div>
				<div className="form__controls-total_span4">us</div>
			</div>
			<Button
				id="CopyBtn"
				className="form__controls--button"
				onClick={buyLicense}
			>
				buy now
			</Button>
			<div className="form__controls-selected-lecense">
				{selectedLecenseText}
			</div>
		</div>
	)
};

export default FormControl;