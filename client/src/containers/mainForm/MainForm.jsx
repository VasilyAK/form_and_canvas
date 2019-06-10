import "./MainForm.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

import FormLicenses from "../../components/formLicenses/FormLicenses";
import FormNumberOfLicenses from "../../components/formNumberOfLicenses/FormNumberOfLicenses";
import FormControls from "../../components/formControls/FormControls";

import {fetchLicense} from "../../store/actions/license_action";

class MainForm extends (Component) {
	render () {
		const MainFormBlock =
			<>
				<div className="main-form">
					{
						this.props.licenseData.map(item => {
							return <FormLicenses
								{...item}
								key={item.id}
								dispatch={this.props.dispatch}
							/>;
						})
					}
					<FormNumberOfLicenses
						{...this.props.formVars}
						dispatch={this.props.dispatch}
					/>
					<FormControls
						{...this.props.formVars}
						dispatch={this.props.dispatch}
					/>
				</div>
				<div className="main-link">
					<Link to="/task2">Перейти к заданию 2</Link>
				</div>
			</>
		;

		if (this.props.licenseData !== null) {
			return MainFormBlock;
		}
		return null;
	}

	componentDidMount () {
		this.props.dispatch(fetchLicense());
	}
}

MainForm.propTypes = {
	licenseData: PropTypes.array,
	formVars: PropTypes.object,
	fetching: PropTypes.bool,
	error: PropTypes.string
};

function mapStateToProps(state) {
	return {
		licenseData: state.data.licenseData,
		formVars: state.data.formVars,
		fetching: state.data.fetching,
		error: state.data.error
	};
}


export default connect(mapStateToProps)(MainForm);