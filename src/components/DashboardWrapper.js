import React, { Component } from 'react'
import Dashboard from './Dashboard'

class DashWrap extends Component {
	render(){
		return (
			<div id='user-dashboard'>
				<h1>User Dashboard</h1>
				{this.props.children}
			</div>
		)
	}
}

export default DashWrap