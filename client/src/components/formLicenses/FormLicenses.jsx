import "./FormLicenses.css";
import React from "react";

import {setFocus} from "../../store/actions/license_action";

const FormLicenses = (props) => {
	const setFocusOnForm = (e) => {
		let target;
		let targetFocus;
		let targetPrice;
		const className = "form__lecense-line";

		e.target.classList.contains(className) ? target = e.target :
			e.target.parentNode.classList.contains(className) ? target = e.target.parentNode :
				target = e.target.parentNode.parentNode;

		targetFocus = target.getAttribute("data-focus");
		targetPrice = target.getAttribute("data-price");

		document.querySelectorAll(".form__checkbox-checked").forEach(item => {
			if (item !== target.firstChild) {
				item.setAttribute("class", "form__checkbox")
			}
		});

		document.querySelectorAll(".form__checkbox-in-checked").forEach(item => {
			if (item !== target.firstChild.firstChild) {
				item.setAttribute("class", "form__checkbox-in")
			}
		});

		if (target.firstChild.classList.contains("form__checkbox")) {
			target.firstChild.setAttribute("class", "form__checkbox-checked");
			target.firstChild.firstChild.setAttribute("class", "form__checkbox-in-checked");
			props.dispatch(setFocus(targetFocus, targetPrice));
		} else {
			target.firstChild.setAttribute("class", "form__checkbox");
			target.firstChild.firstChild.setAttribute("class", "form__checkbox-in");
			props.dispatch(setFocus(0, 0));
		}
	};

	return (
		<div
			className="form__lecense-line"
			data-focus={props.id}
			data-price={props.price}
			onClick={setFocusOnForm}
		>
			<div className="form__checkbox">
				<div className="form__checkbox-in" />
			</div>
			<div className="form__license-name">
				{props.name}
			</div>
			<div className="form__license-price">
				${props.price} per&nbsp;lisense
			</div>
		</div>
	)
};

export default FormLicenses;