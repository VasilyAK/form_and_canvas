import "./FormNumberOfLicenses.css";
import React from "react";

import Form from "react-bootstrap/Form";

import {setNumber} from "../../store/actions/license_action";

const FormNumberOfLicenses = (props) => {

	const setNumberOnForm = (e) => {
		props.dispatch(setNumber(e.target.value))
	};

	return (
		<div className="form__number">
			<Form.Label className="form__number-label">Number of license:</Form.Label>
			<Form.Control
				className="form__number-input"
				min={1}
				onChange={setNumberOnForm}
				type="number"
				value={props.numberOfLicenses}
			/>
		</div>
	)
};

export default FormNumberOfLicenses;