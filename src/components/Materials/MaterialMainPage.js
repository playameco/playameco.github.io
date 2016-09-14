import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getMaterialsList } from '../../actions/actions'

import LearnSection from './LearnSection'
import RecycleSection from './RecycleSection'
import ReuseSection from './ReuseSection'
import ReduceSection from './ReduceSection'

import { browserHistory } from 'react-router'

class MaterialMainPage extends Component {
	constructor(){
		super();
		this.state = {
			material: ''
		}
	}
	componentWillMount(){
		var material = localStorage.getItem('chosenMaterial');
		this.setState({
			material
		})
	}
	render(){
		return (
				<div className='main-area'>
					<h1>{this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
					<div className='main-row'>
						<section onClick={()=>{browserHistory.push('/materials/learn')}}>
				        	<h1>Learn</h1>
				        	<p>Educational Material and Tutorials</p>
			        	</section>
						<section onClick={()=>{browserHistory.push('/materials/recycle')}}>
				        	<h1>Recycle</h1>
				        	<p>See Recycling Locations and Information</p>
			        	</section>
					</div>
		        	<div className='main-row'>
		        		<section onClick={()=>{browserHistory.push('/materials/reuse')}}>
				        	<h1>Reuse</h1>
				        	<p>Ideas and Examples of how to Reuse Otherwise Disposable Materials</p>
			        	</section>
			        	<section onClick={()=>{browserHistory.push('/materials/reduce')}}>
				        	<h1>Reduce</h1>
				        	<p>Information on how to Reduce Dependency on Disposable Materials</p>
			        	</section>
		        	</div>
	        	</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial
    };
};
MaterialMainPage = connect(state => (mapStateToProps), null)(MaterialMainPage);
export default MaterialMainPage
