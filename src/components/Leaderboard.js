import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

// import URL_RECENT from './leadersRecent.json';
var URL_RECENT = require('json!./leadersRecent.json');
var URL_ALL_TIME = require('json!./leadersAllTime.json');

// Root React component
class Leaderboard extends Component {
  constructor(props) {
    super(props);
    var sortOptions =  {
      'Recent': URL_RECENT,
      'All time': URL_ALL_TIME
    };

    this.state = {
      loading: false,
      sort_options: sortOptions,
      data_source: sortOptions.Recent,
      users: sortOptions.Recent
    };
  }

  // Update URL and reload user list
  setSource(data) {
    console.log(data)
    this.setState({
      data_source: this.state.sort_options[data],
      users: this.state.sort_options[data]
    });
  }
  render() {
    return (
      <div className='container' id='app'>
        <div className='container'>
          <header>
            <h1>amEco Leaderboard</h1>
          </header>
          <Options value={this.state.data_source}
            options={this.state.sort_options}
            onChange={this.setSource.bind(this)} />
          <LeaderboardItems users={this.state.users} />
        </div>
      </div>
    );
  }
}

// Filter options
class Options extends Component {
  constructor(props) {
    super(props);
    // Bind non-React methods
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.props.onChange(this.refs.sortOption.value);
  }
  render() {
    var optionKeys = Object.keys(this.props.options);
    var options = optionKeys.map((key) => {
      return (
        <option key={key} value={key}>{key}</option>
      );
    });
    return (
      <div className='actions'>
        <label htmlFor='sortOption'>Sort by: </label>
        <select id='sortOption' value={this.props.data_source} ref='sortOption' onChange={this.onChange}>
          {options}
        </select>
      </div>
    );
  }
}

// Display users from current data source
class LeaderboardItems extends Component {
  render() {
    var items = this.props.users.map(function(user, pos) {
      return (
        <LeaderboardItem user={user} key={user.username} position={pos + 1} />
      );
    });
    return (
      <table className='results'>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Recent</th>
            <th>All time</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}

class LeaderboardItem extends Component {
  render() {
    var user = this.props.user;
    return (
      <tr>
        <td>{ this.props.position }</td>
        <td>
          <img className='small' src={user.img} />
          <a href={'https://www.freecodecamp.com/' + user.username} target='_blank'>{ user.username }</a>
        </td>
        <td>{ user.recent }</td>
        <td>{ user.alltime }</td>
      </tr>
    );
  }
}



var mapStateToProps = function(state, ownProps){
    return {
      currentMaterial: state.materialsReducer.currentMaterial
    };
};
Leaderboard = connect(state => (mapStateToProps), null)(Leaderboard);
export default Leaderboard
