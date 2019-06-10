import {
	FETCH_DATA,
	FETCH_DATA_FULFILLED,
	FETCH_DATA_REJECTED
} from "../store/actions/actions_types";

import axios from "axios";

import {call, put, takeLatest} from 'redux-saga/effects';

function* fetchLicenseData (action) {
	const config = {
		timeout: 3000
	};
	const URL = `https://localhost:3000/data`;
	try {
		const LicenseData = yield call(axios.get, URL, config);
		yield put ({
			type: FETCH_DATA_FULFILLED,
			payload: LicenseData
		})
	} catch (e) {
		yield put ({
			type: FETCH_DATA_REJECTED,
			payload: e.message
		})
	}
}

export default function* watchFetchLicenseData() {
	yield takeLatest (FETCH_DATA, fetchLicenseData)
}