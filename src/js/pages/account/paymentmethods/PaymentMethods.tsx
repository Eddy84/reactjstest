import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';
import { Link } from "react-router-dom";

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';

import { Card } from 'semantic-ui-react';
import { PaymentMethodCard,PaymentMethodCardProps } from './PaymentMethodCard';
import { Address } from './PaymentMethodCard';
import { PaymentMethodCardNew } from './PaymentMethodCardNew';


export interface Props extends BaseProps
{
	match;
}

export interface State extends BaseState
{
	from;
}

const g_address : Address =
{
	firstname : "Eduard",
	lastname : "Aumüller",
	address1 : "Bgm.-Herold-Str. 12",
	address2 : "45",
	city : "Ebensfeld",
	postcode : "96250",
	country : "Deutschland",
	county : "",
	phone : "+49 (0)9573 6159"
};

const g_payment_method =
{
	name : "Paypal"
}

const g_paymentmethodprops : PaymentMethodCardProps =
{
	address : g_address,
	paymentMethod : g_payment_method
}

export class PaymentMethods extends Base<Props & WithNamespaces, State> 
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
			{ label:t('account:paymentmethods.title'), 	url:'' 			}
		];

		return (
            <div className="u-page u-page-account u-page-account-paymentmethods">
                <Breadcrumb items={breadcrumb}/>
				<h1>{ t('account:paymentmethods.title') }</h1>
				<Card.Group>
					<PaymentMethodCardNew/>
					<PaymentMethodCard {...g_paymentmethodprops}/>
					<PaymentMethodCard {...g_paymentmethodprops}/>
					<PaymentMethodCard {...g_paymentmethodprops}/>
				</Card.Group>
            </div>
		);
	}
}

export default withNamespaces()(PaymentMethods);