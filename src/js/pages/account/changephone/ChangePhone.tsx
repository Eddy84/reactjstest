import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';
import { Segment } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';


export interface ChangePhoneProps extends BaseProps
{
	match;
}

export interface ChangePhoneState extends BaseState
{
	from;
}

export class ChangePhone extends Base<ChangePhoneProps & WithNamespaces, ChangePhoneState> 
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
			{ label:t('account:changephone.title'), 	url:'' 			                }
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-changephone">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:changephone.title') }</h1>
                <Segment>
                    <p>{ t('account:changephone.note') }</p>
                    <Form>
                        <Form.Field>
                            <label>{ t('account:form.phone.label') }</label>
                            <Input size='mini' placeholder={ t('account:form.phone.placeholder') }/>
                        </Form.Field>
                        <Button fluid type='submit'>{ t('account:changephone.submit.label')}</Button>
                    </Form>
                </Segment>
            </div>
		);
	}
}

export default withNamespaces()(ChangePhone);