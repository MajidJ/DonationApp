import React from 'react';

const Checkbox = props => (

	<div className="checkbox">
		<label htmlFor="save-payment">Save My Payment Information</label>
		<input type="checkbox" id="save-payment" name="checkbox" onChange={props.handleCheckbox}/>
		<label htmlFor="save-subscribe">Monthly Donation</label>
		<input type="checkbox" id="save-subscribe" name="subscribe-checkbox" onChange={props.handleSubscribe}/>
	</div>
);

export default Checkbox;