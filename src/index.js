import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from 'reducers';

import Layout from 'containers/layout';
import Phones from 'containers/phones';
import Arrays from 'containers/arrays';
import Select from 'containers/select';

const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={Layout}>
				<Route path="/" component={Phones} />
				<Route path="/arrays" component={Arrays} />
				<Route path="/select" component={Select} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)