import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from 'reducers';

import App from 'containers/App';
import Home from 'containers/Home';
import AllCity from 'containers/AllCity';
import Plots from 'containers/Plots';
import Array from 'containers/Array';
import Contacts from 'containers/Contacts';

const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={App}>
				<Route path="/" component={Home} />
				<Route path="/all-city" component={AllCity} />
				<Route path="/plots/:id" component={Plots} />
				<Route path="/array/:id" component={Array} />
				<Route path="/contacts" component={Contacts} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
