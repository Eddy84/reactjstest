import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';
import { Segment } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';


export interface ChangeEmailProps extends BaseProps
{
	match;
}

export interface ChangeEmailState extends BaseState
{
	from;
}

export class ChangeEmail extends Base<ChangeEmailProps & WithNamespaces, ChangeEmailState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const breadcrumb =
		[
            { label:t('account:overview.title'), 		url:'/account' 	                },
            { label:t('account:loginsecurity.title'), 	url:'/account/loginsecurity' 	},
			{ label:t('account:changeemail.title'), 	url:'' 			                }
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-changeemail">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:changeemail.title') }</h1>
                <Segment>
				<p>{ t('account:changeemail.note') }</p>
                    <Form>
                        <Form.Field>
                            <label>{ t('account:form.email.label') }</label>
                            <div>eduard.aumueller@rising-faction.de</div>
                        </Form.Field>
                        <Form.Field>
                            <label>{ t('account:form.emailnew.label') }</label>
                            <Input size='mini' placeholder={ t('account:form.emailnew.placeholder') }/>
                        </Form.Field>
                        <Form.Field>
                            <label>{ t('account:form.emailrepeat.label') }</label>
                            <Input size='mini' placeholder={ t('account:form.emailrepeat.placeholder') }/>
                        </Form.Field>
                        <Form.Field>
                            <label>{ t('account:form.password.label') }</label>
                            <Input size='mini' type="password" placeholder={ t('account:form.password.placeholder') }/>
                        </Form.Field>
                        <Button fluid type='submit'>{ t('account:changeemail.submit.label')}</Button>
                    </Form>
                </Segment>
            </div>
		);
	}
}

export default withNamespaces()(ChangeEmail);