import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Router, IndexRoute, useRouterHistory, browserHistory} from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import {Provider} from 'react-redux';
import { store, dispatch } from './store/store'

import MainPage from './components/MainPage'
import PointSystem from './components/PointSystem'
import MaterialMainPage from './components/Materials/MaterialMainPage'

import LearnSection from './components/Materials/LearnSection'
import RecycleSection from './components/Materials/RecycleSection'
import ReuseSection from './components/Materials/ReuseSection'
import ReduceSection from './components/Materials/ReduceSection'

import Login from './components/Login/LoginMain'
// import Dashboard from './components/Login/Dashboard'

import routes from './routes'

import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.sass';

ReactDOM.render(
	<Provider store={store}>
		<Router history={appHistory} routes={routes}>
		</Router>
	</Provider>,
	document.getElementById('root'));


//<Route component={App}>
//	<Route path='/' component={MainPage} />
//	<Route path='/login' component={Login}/>
//	<Route path='/materials' component={MaterialMainPage}/>
//	<Route path='/materials/learn' component={LearnSection} />
//	<Route path='/materials/recycle' component={RecycleSection} />
//	<Route path='/materials/reuse' component={ReuseSection} />
//	<Route path='/materials/reduce' component={ReduceSection} />
//	<Route path='/example' component={PointSystem} />
//</Route>
