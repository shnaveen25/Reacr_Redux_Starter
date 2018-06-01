import React 					from 'react';
import ReactDOM 			from 'react-dom';
import { Provider } 	from 'react-redux';        // A Highely order component which allows you to bind Redux with React .

import promise        from 'redux-promise';      // Ansures that only if action (Any API request) is access the only calles to a reducer.
import { 
    createStore,                                 // A store holdes the complete state of the application. It brings action and reducer together.
    applyMiddleware                              // A payload of information that can only send the data to Store 
}                     from 'redux';
import { 
    BrowserRouter,                               // Will user ti handle dynamic request.
    Switch,                                      // Used to match exact path.
    Redirect,                                    // used to redirect to a another path.
    Route
}                     from 'react-router-dom';

import reducers       from './reducers';        // Specifies how application to act in response of action set to rtesponse. 
import LandingPage 		from './containers/LandingPage';
import Login 					from './containers/Login';
import logo 					from './logo.svg';
import { SessionService }    from './utility/SessionService';
import './App.css';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>    typeof(SessionService.getMailid() !== 'undefined') &&
                            SessionService.getMailid() !== null &&
                            SessionService.getMailid() !== ''
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		 <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
	  			<Switch>
	  				<PrivateRoute path="/landingpage" component={LandingPage} />
	  				<Route path="/login" component={Login} />
	  				<Redirect from="/" to="/login" />
	  			</Switch>
  		</div>
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root') 
);
