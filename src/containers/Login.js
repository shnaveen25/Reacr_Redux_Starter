import React, { Component } 		from 'react';
import { bindActionCreators } 	from 'redux';
import { connect } 							from 'react-redux';

import LoginForm								from './../components/LoginForm';
import { login } 								from './../actions/LoginService';
import { SessionService } 					from './../utility/SessionService';

class Login extends Component {
	constructor(props) {
		super(props);
		console.log('Inside Login Component Constructor');
	} 

	handleSubmit = (data) => {
		this.props.login(data, (response) => {
			console.log('Login response : ', response);
			if(response.status === 200) {
				SessionService.setUsername(response.data.userdata.name);
				SessionService.setMailid(response.data.userdata.email);
				this.props.history.push('/landingpage');
			} else {
				alert('Invalid credentials');
			}
		});
	}

	render() {
		return(
      <LoginForm onSubmit={this.handleSubmit} />
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
	login,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

 	