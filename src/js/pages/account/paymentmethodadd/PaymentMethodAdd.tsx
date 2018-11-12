import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';

import { Card } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';


export interface PaymentMethodAddProps extends BaseProps
{
}

export interface PaymentMethodAddState extends BaseState
{
}

export class PaymentMethodAdd extends Base<PaymentMethodAddProps & WithNamespaces, PaymentMethodAddState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const breadcrumb =
		[
			{ label:t('account:overview.title'), 		    url:'/account' 	                },
            { label:t('account:paymentmethods.title'), 	    url:'/account/paymentmethods' 	},
            { label:t('account:paymentmethodadd.title'), 	url:'' 	                        },
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-addresses">
                <Breadcrumb items={breadcrumb}/>
                <h2>{ t('account:paymentmethodadd.title') }</h2>
				<Form>
                    <Form.Field>
						<label>{ t('account:form.paymentmethod.label') }</label>
						<Dropdown className='mini' placeholder={ t('account:form.paymentmethod.placeholder') } fluid search selection/>
					</Form.Field>

					<Button fluid type='submit'>{ t('account:paymentmethodadd.submit.label')}</Button>
				</Form>
            </div>
		);
	}
}

export default withNamespaces()(PaymentMethodAdd);