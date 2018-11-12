import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Link } from "react-router-dom";

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';
import { Segment } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';


export interface LoginSecurityProps extends BaseProps
{
	match;
}

export interface LoginSecurityState extends BaseState
{
	from;
}

export class LoginSecurity extends Base<LoginSecurityProps & WithNamespaces, LoginSecurityState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const breadcrumb =
		[
			{ label:t('account:overview.title'), 		url:'/account' 	},
			{ label:t('account:loginsecurity.title'), 	url:'' 			}
		];

		return (
            <div className="u-page u-page-account u-page-account-loginsecurity">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:loginsecurity.title') }</h1>
				<Segment.Group>
					<Segment clearing>
						<Button floated="right" as={Link} to={'/account/loginsecurity/changename'}>{ t('account:loginsecurity.name.edit.label') }</Button>
						<b>{ t('account:loginsecurity.name.label') }</b><br/>
						<span>Eduard Aumüller</span>
					</Segment>
					<Segment clearing>
						<Button floated="right" as={Link} to={'/account/loginsecurity/changeemail'}>{ t('account:loginsecurity.email.edit.label') }</Button>
						<b>{ t('account:loginsecurity.email.label') }</b><br/>
						<span>eduard.aumueller@rising-faction.de</span>
					</Segment>
					<Segment clearing>
						<Button floated="right" as={Link} to={'/account/loginsecurity/changephone'}>{ t('account:loginsecurity.phone.edit.label') }</Button>
						<b>{ t('account:loginsecurity.phone.label') }</b><br/>
						<span>+49(0)9573/6159</span>
					</Segment>
					<Segment clearing>
						<Button floated="right" as={Link} to={'/account/loginsecurity/changepassword'}>{ t('account:loginsecurity.password.edit.label') }</Button>
						<b>{ t('account:loginsecurity.password.label') }</b><br/>
						<span>********</span>
					</Segment>
					<Segment clearing>
						<Button floated="right" as={Link} to={'/account/loginsecurity/settings'}>{ t('account:loginsecurity.settings.edit.label') }</Button>
						<b>{ t('account:loginsecurity.settings.label') }</b><br/>
						<span>Sicherheitseinstellungen und Authentifizierung</span>
					</Segment>
				</Segment.Group>
				<br/>
            </div>
		);
	}
}

export default withNamespaces()(LoginSecurity);