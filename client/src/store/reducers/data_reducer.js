import {
	FETCH_DATA,
	FETCH_DATA_REJECTED,
	FETCH_DATA_FULFILLED,
	SET_FOCUS,
	SET_NUMBER
} from "../actions/actions_types";

const licenseInitialState = {
	//userData: null,
	licenseData: [
		{
			"id": 1,
			"name": "license plan#1",
			"price": 13
		},
		{
			"id": 2,
			"name": "license plan#2",
			"price": 22
		},
		{
			"id": 3,
			"name": "license plan#3",
			"price": 34
		}
	],
	formVars: {
		numberOfLicenses: 1,
		focus: 0,
		price: 0
	},
	fetching: false,
	error: null
};

const userReducer = (state = licenseInitialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {...state, fetching: true};

		case FETCH_DATA_REJECTED:
			return {...state, fetching: false, error: action.payload};

		case FETCH_DATA_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				licenseData: action.payload,
			};


		case SET_FOCUS:
			return {
				...state,
				formVars: {
					...state.formVars,
					focus: action.payload.focus,
					price: action.payload.price
				}
			};


		case SET_NUMBER:
			return {
				...state,
				formVars: {
					...state.formVars,
					numberOfLicenses: action.payload
				}
			};


		default:
			return state;
	}
};

export default userReducer;