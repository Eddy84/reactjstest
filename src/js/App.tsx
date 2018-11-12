import * as React from "react";
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import {Typeahead} from 'react-bootstrap-typeahead';

import { withNamespaces,WithNamespaces } from 'react-i18next';


import { Container,Row,Col } from 'reactstrap';

import { Navigation,NavigationRow } from './components/navigation/Navigation';
import { PrivateRoute } from './components/router/PrivateRoute';

import Pages from './pages';

import auth from './stores/Auth';
import history from './stores/History';

export interface AppProps
{
}


export class App extends React.Component<AppProps & WithNamespaces, {}> 
{
						//<Route exact path="/" render={ () => { return ( <Redirect to=""/> ) } }/>
	render()
	{
		return	<Router history={history}>
					<div className="app">
						<Switch>
							<Route exact path="/account/addresses" component={Pages.AccountAddresses}/>
							<Route exact path="/account/addresses/add" component={Pages.AccountAddressAdd}/>
							<Route exact path="/account/addresses/edit" component={Pages.AccountAddressEdit}/>
							<Route exact path="/account/balance" component={Pages.AccountBalance}/>
							<Route exact path="/account/loginsecurity" component={Pages.AccountLoginSecurity}/>
							<Route exact path="/account/loginsecurity/changename" component={Pages.AccountChangeName}/>
							<Route exact path="/account/loginsecurity/changeemail" component={Pages.AccountChangeEmail}/>
							<Route exact path="/account/loginsecurity/changephone" component={Pages.AccountChangePhone}/>
							<Route exact path="/account/loginsecurity/changepassword" component={Pages.AccountChangePassword}/>
							<Route path="/account/orders" component={Pages.AccountOrders}/>
							<Route exact path="/account/paymentmethods" component={Pages.AccountPaymentMethods}/>
							<Route exact path="/account/paymentmethods/add" component={Pages.AccountPaymentMethodAdd}/>
							<Route path="/account/settings" component={Pages.AccountSettings}/>
							<Route path="/account" component={Pages.AccountOverview}/>
							<Route exact path="/" component={Pages.Search}/>
							<Route path="/cart" component={Pages.Category}/>
							<Route path="/c" component={Pages.Category}/>
							<Route path="/s" component={Pages.Search}/>
							<PrivateRoute path="/checkout/:step/:slug" auth={auth} component={Pages.Checkout}/>
							<Route path="/login" component={Pages.Login}/>
							<Route path="/register" component={Pages.Register}/>
							<Route path="/:slug/a/:articleId/:opt?" component={Pages.Article}/>
							<Redirect from="*" to="/"/>
						</Switch>
					</div>
				</Router>;
	}
}

export default withNamespaces()(App);
