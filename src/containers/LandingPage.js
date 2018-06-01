import React, { Component } 		from 'react';
import { bindActionCreators } 	from 'redux';
import { connect } 							from 'react-redux';
import { fetchAllUsers }				from './../actions/UserService';
import { SessionService }				from './../utility/SessionService';

import './../App.css';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		console.log('Inside the constructor of LandingPage Component');
	}

	componentDidMount() {
		this.props.fetchAllUsers(SessionService.getMailid());
	}

	render() {
		const { userData } = this.props;
		return(
			<div className="App-intro">
        {userData.map((user, index) => {
        	return (<li key={index}> {user.name} </li>)
        })}
      </div>
		);
	}
}

const mapStateToProps = state => ({
	userData : state.user.usersData || []
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchAllUsers,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);