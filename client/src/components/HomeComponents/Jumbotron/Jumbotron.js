import React from 'react';
// import Button from '@material/react-button/dist'; // /index.js is implied
import './Jumbotron.css';

class Jumbotron extends React.Component {
    render () {
        return (
            <div className="jumbotron jumbotron-fluid" style={{zIndex: -1}}>
                {/* This empty div for color gradient overlay on top of image */}
                <div className="color-overlay"></div>
                <div className="white-box"/>
                <div className="inner">
                    <h1>Love Foundation</h1>
                    <p className="lead lead-text">Template code for a standalone website with stripe integration for micro donations</p>
                </div>
                {/* <hr className="my-4"></hr>
                <p className="lead">
                    <Button raised className='button-alternate' onClick={() => console.log('clicked!')}>
                        Learn more
                    </Button>
                </p> */}
			</div>
		);
	}
}

export default Jumbotron;