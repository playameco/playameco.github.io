import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'

class ReuseSection extends Component {
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
  render() {
    return (
      <div className='sections'>
        <h1>Ideas for Reusing {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
        <div className='social-media-hashtag'>#amEco</div>
        <div className='social-media-hashtag'>#{this.state.material}</div>
        <ul className='social-feed-list'>
          <li className='social-feed-item'>
            <div className='dummy-image placehoder'></div>
            <div className='social-text-area'>
              <h3>Amy Knight</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#amEco</strong>
              </p>
              <i className="fa fa-retweet" aria-hidden="true"></i> 134
              <i className="fa fa-heart" aria-hidden="true"></i> 173
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image placehoder'></div>
            <div className='social-text-area'>
              <h3>Gwen Faraday</h3>
              <p>
                So many ways to reuse <strong>#{this.state.material}</strong>!!! <strong>#amEco</strong>
              </p>
              <i className="fa fa-retweet" aria-hidden="true"></i> 20
              <i className="fa fa-heart" aria-hidden="true"></i> 55
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image placehoder'></div>
            <div className='social-text-area'>
              <h3>Jared Wilcurt</h3>
              <p>
                See at how I reused this <strong>#{this.state.material}</strong>. 
                Junk isn't always Junk! <strong>#amEco</strong>
              </p>
              <i className="fa fa-retweet" aria-hidden="true"></i> 12
              <i className="fa fa-heart" aria-hidden="true"></i> 23
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image placehoder'></div>
            <div className='social-text-area'>
              <h3>Kim Sharpe</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#amEco</strong>
              </p>
              <i className="fa fa-retweet" aria-hidden="true"></i> 4
              <i className="fa fa-heart" aria-hidden="true"></i> 11
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReuseSection = connect(state => (mapStateToProps), null)(ReuseSection);
export default ReuseSection