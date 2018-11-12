import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';


export interface BalanceProps extends BaseProps
{
	match;
}

export interface BalanceState extends BaseState
{
	from;
}

export class Balance extends Base<BalanceProps & WithNamespaces, BalanceState> 
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
			{ label:t('account:balance.title'), 		url:'' 			}
		];

		return (
            <div className="u-page u-page-account u-page-account-balance">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:balance.title') }</h1>
            </div>
		);
	}
}

export default withNamespaces()(Balance);