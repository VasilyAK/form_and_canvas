import {
	FETCH_DATA,
	SET_FOCUS,
	SET_NUMBER
} from "./actions_types";

export function fetchLicense () {
	return {
		type: FETCH_DATA
	}
}

export function setFocus (focus, price) {
	return {
		type: SET_FOCUS,
		payload: {
			focus: parseInt(focus),
			price: parseFloat(price)
		}
	}
}

export function setNumber (number) {
	return {
		type: SET_NUMBER,
		payload: number
	}
}