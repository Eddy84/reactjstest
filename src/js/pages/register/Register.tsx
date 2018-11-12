import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';
import { Segment } from 'semantic-ui-react';

import  FormRegister from '../../components/account/FormRegister';

export interface RegisterProps extends BaseProps
{
	match;
}

export interface RegisterState extends BaseState
{
}

export class Register extends Base<RegisterProps & WithNamespaces, RegisterState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		return (
			<Segment className="u-page-register">
				<FormRegister/>
			</Segment>
		);
	}
}

export default withNamespaces()(Register);
