import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';


export interface SettingsProps extends BaseProps
{
	match;
}

export interface SettingsState extends BaseState
{
	from;
}

export class Settings extends Base<SettingsProps & WithNamespaces, SettingsState> 
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
			{ label:t('account:settings.title'), 		url:'' 			}
		];

		return (
            <div className="u-page u-page-account u-page-account-settings">
                <Breadcrumb items={breadcrumb}/>
                <h1>{ t('account:settings.title') }</h1>
            </div>
		);
	}
}

export default withNamespaces()(Settings);