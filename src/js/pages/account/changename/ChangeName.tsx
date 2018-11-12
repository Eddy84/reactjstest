import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';
import { Segment } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';


export interface ChangeNameProps extends BaseProps
{
	match;
}

export interface ChangeNameState extends BaseState
{
	from;
}

export class ChangeName extends Base<ChangeNameProps & WithNamespaces, ChangeNameState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const breadcrumb =
		[
			{ label:t('account:overview.title'), 		url:'/account' 					},
			{ label:t('account:loginsecurity.title'), 	url:'/account/loginsecurity' 	},
			{ label:t('account:changename.title'), 		url:'' 							}
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-changename">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:changename.title') }</h1>
				<Segment>
					<p>{ t('account:changename.note') }</p>
					<Form>
						<Form.Field>
							<label>{ t('account:form.firstname.label') }</label>
							<Input size='mini' placeholder={ t('account:form.firstname.placeholder') }/>
						</Form.Field>
						<Form.Field>
							<label>{ t('account:form.lastname.label') }</label>
							<Input size='mini' placeholder={ t('account:form.lastname.placeholder') }/>
						</Form.Field>
						<Button fluid type='submit'>{ t('account:changename.submit.label')}</Button>
					</Form>
				</Segment>
            </div>
		);
	}
}

export default withNamespaces()(ChangeName);