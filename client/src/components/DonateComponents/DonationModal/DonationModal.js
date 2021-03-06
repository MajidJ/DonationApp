import React from 'react';
import ButtonPrimary from '../../Buttons/ButtonPrimary';
import './DonationModal.css'; 


class DonationModal extends React.Component {
	render() {
		// Render nothing if the "show" prop is false
		// if(!this.props.show) {
		// 	return null;
		// }

		// The gray background
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.5)',
			padding: 50,
			zIndex:5,
		};

		// The modal "window"
		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			maxWidth: 500,
			minHeight: 100,
			margin: '0 auto',
			boxShadow: '0px 5px 10px 2px rgba(0,0,0,0.4)',
			padding: 30,
		};

		return (
			<div className="backdrop" style={backdropStyle}>
				<div className="modal-content" style={modalStyle}>
					<div className="modal-body">
						{this.props.children}
					</div>
					<div className="modal-footer">
						<ButtonPrimary handleClick={this.props.onClose}>
							Close
						</ButtonPrimary>
					</div>
				</div>
			</div>
		);
	}
}

// DonationModal.propTypes = {
// 	onClose: PropTypes.func.isRequired,
// 	show: PropTypes.bool,
// 	children: PropTypes.node
// };

export default DonationModal;