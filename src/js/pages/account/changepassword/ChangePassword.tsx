import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';
import { Segment } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';


export interface ChangePasswordProps extends BaseProps
{
	match;
}

export interface ChangePasswordState extends BaseState
{
	from;
}

export class ChangePassword extends Base<ChangePasswordProps & WithNamespaces, ChangePasswordState> 
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
			{ label:t('account:changepassword.title'),	url:'' 			                }
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-changepassword">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:changepassword.title') }</h1>
                <Segment>
                    <p>{ t('account:changepassword.note') }</p>
                    <Form>
                        <Form.Field>
                            <label>{ t('account:form.passwordcurrent.label') }</label>
                            <Input size='mini' type='password' placeholder={ t('account:form.passwordcurrent.placeholder') }/>
                        </Form.Field>
                        <Form.Field>
                            <label>{ t('account:form.passwordnew.label') }</label>
                            <Input size='mini' type='password' placeholder={ t('account:form.passwordnew.placeholder') }/>
                        </Form.Field>
                        <Form.Field>
                            <label>{ t('account:form.passwordnewrepeat.label') }</label>
                            <Input size='mini' type='password' placeholder={ t('account:form.passwordnewrepeat.placeholder') }/>
                        </Form.Field>
                        <Button fluid type='submit'>{ t('account:changepassword.submit.label')}</Button>
                    </Form>
                </Segment>
            </div>
		);
	}
}

export default withNamespaces()(ChangePassword);