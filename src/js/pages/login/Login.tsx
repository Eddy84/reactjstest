import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';


import { Segment } from 'semantic-ui-react';

import FormLogin from '../../components/account/FormLogin';

import auth		from '../../stores/Auth';
import history	from '../../stores/History';

export interface LoginProps extends BaseProps
{
	match;
	location;
}

export interface LoginState extends BaseState
{
	from;
}

export class Login extends Base<LoginProps & WithNamespaces, LoginState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		console.log(this.props.location);

		return (
			<Segment className="u-page-login">
				<FormLogin 
					onLogin={(event:React.MouseEvent<HTMLElement>) => this.handleLogin(event)}
					onRegister={(event:React.MouseEvent<HTMLElement>) => this.handleRegister(event)}
				/>
			</Segment>
		);
	}

	handleLogin(e : React.MouseEvent<HTMLElement>)
	{
		auth.authenticate();

		if(this.props.location)
		{
			let { from } = this.props.location.state || { from: { pathname: "/" } };

			history.push(from.pathname);
		}
		else
		{
			history.push("/");
		}
	}
	handleRegister(e : React.MouseEvent<HTMLElement>)
	{
		history.push("/register");
	}
}

export default withNamespaces()(Login);
