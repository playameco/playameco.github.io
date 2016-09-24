import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Router, IndexRoute, useRouterHistory, browserHistory} from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import {Provider} from 'react-redux';
import { store, dispatch } from './store/store'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { UserIsAuthenticated, UserIsAdmin } from './utilities/routerWrappers'

import MainPage from './components/MainPage'
import About from './components/PointSystem'
import MaterialMainPage from './components/Materials/MaterialMainPage'

import LearnSection from './components/Materials/LearnSection'
import RecycleSection from './components/Materials/RecycleSection'
import ReuseSection from './components/Materials/ReuseSection'
import ReduceSection from './components/Materials/ReduceSection'

import Login from './components/Login/LoginMain'
import DashboardWrapper from './components/DashboardWrapper'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/Login/ForgotPassword'
import PasswordReset from './components/Login/PasswordReset'
import Verify from './components/Login/Verify'


import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.sass';

ReactDOM.render(
	<Provider store={store}>
		<Router history={appHistory}>
			<Route component={App}>
				<Route path='/' component={MainPage} />
				<Route path='/materials' component={MaterialMainPage}/>
				<Route path='/materials/learn' component={LearnSection} />
				<Route path='/materials/recycle' component={RecycleSection} />
				<Route path='/materials/reuse' component={ReuseSection} />
				<Route path='/materials/reduce' component={ReduceSection} />
				<Route path='/about' component={About} />
				<Route path='/login' component={Login} />
				<Route path='/verify' component={Verify} />
				<Route path='/forgot-password' component={ForgotPassword} />
				<Route path='/reset-password' component={PasswordReset} />
				<Route path='/dashboard' component={Dashboard} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root'));

