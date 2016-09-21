import React, { Component } from 'react'

import { Link, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import { connect } from 'react-redux'
import { verify } from '../../actions/users'

class Verify extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true,
			error: false
		}
	}
	onSignUp(e){
	    e.preventDefault();

	    var code = this.refs.code.value;
	    var username = localStorage.getItem('username');

	    this.props.dispatch(
	    	verify(username, code)
    	)

        appHistory.replace('/dashboard')
	}

	//why am I setting state every time there is a keypress????
	//TODO: these two functions need to be cleaned up:
	toggleCodeLabel(){
		if (this.refs.code.value.length > 0){
			this.setState({
				showPwdLabel: false
			})
		} else {
			this.setState({
				showPwdLabel: true
			})
		}
	}
  render () {
    return (
    	<div id='login-components'>
    		<div className="form">
	    		<div id="verify-form">
			          <h1>Verification Code</h1>

			          <form onSubmit={this.onSignUp.bind(this)}>

			            <div className="field-wrap">
				            <label className={this.state.showCodeLabel ? '' : 'active highlight'}>
				              Verification Code<span className="req">*</span>
				            </label>
				            <input ref='code' onKeyUp={this.toggleCodeLabel.bind(this)} type="number" required autoComplete="off"/>
			            </div>

			            <p className="forgot"><a>Resend Authentication Code</a></p>

			            {this.state.error && (
				            <p className='login-error'>Invalid Login Information</p>
				        )}

			          <button type='submit' className="button button-block">Complete Sign Up</button>

			          </form>
		        </div>
	        </div>
        </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial
    };
};
Verify = connect(state => (mapStateToProps), null)(Verify);
export default Verify
