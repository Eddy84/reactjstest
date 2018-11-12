import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';

import { Card } from 'semantic-ui-react';
import { AddressCard,AddressCardProps } from './AddressCard';
import { AddressCardNew } from './AddressCardNew';

export interface Props extends BaseProps
{
	match;
}

export interface State extends BaseState
{
	from;
}

export class Addresses extends Base<Props & WithNamespaces, State> 
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
			{ label:t('account:addresses.title'), 		url:'' 			}
		];

		const address : AddressCardProps =
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

		return (
            <div className="u-page u-page-account u-page-account-addresses">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:addresses.title') }</h1>
				<Card.Group>
					<AddressCardNew/>
					<AddressCard {...address}/>
					<AddressCard {...address}/>
					<AddressCard {...address}/>
					<AddressCard {...address}/>
				</Card.Group>
            </div>
		);
	}
}

export default withNamespaces()(Addresses);