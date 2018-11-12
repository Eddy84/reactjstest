import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';


export interface Props extends BaseProps
{
	match;
}

export interface State extends BaseState
{
	from;
}

export class Orders extends Base<Props & WithNamespaces, State> 
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
			{ label:t('account:orders.title'), 			url:'' 			}
		];

		return (
            <div className="u-page u-page-account u-page-account-orders">
                <Breadcrumb items={breadcrumb}/>
				<h1>{ t('account:orders.title') }</h1>
            </div>
		);
	}
}

export default withNamespaces()(Orders);