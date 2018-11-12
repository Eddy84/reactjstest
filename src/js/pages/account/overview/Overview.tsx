import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';

import { Segment } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

import { OverviewCard } from './OverviewCard';

export interface Props extends BaseProps
{
	match;
}

export interface State extends BaseState
{
	from;
}


export class Overview extends Base<Props & WithNamespaces, State> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const cardAddresses =
		<OverviewCard
			url='/account/addresses'
			icon='address card'
			title={ t('account:overview.card.addresses.title') }
			description={ t('account:overview.card.addresses.description') }
			/>;

		const cardLoginSecurity =
			<OverviewCard
				url='/account/loginsecurity'
				icon='lock'
				title={ t('account:overview.card.loginsecurity.title') }
				description={ t('account:overview.card.loginsecurity.description') }
				/>;

		const cardSettings =
			<OverviewCard
				url='/account/settings'
				icon='setting'
				title={ t('account:overview.card.settings.title') }
				description={ t('account:overview.card.settings.description') }
				/>;

		const cardBalance =
		<OverviewCard
			url='/account/balance'
			icon='balance'
			title={ t('account:overview.card.balance.title') }
			description={ t('account:overview.card.balance.description') }
			/>;

		const cardOrders =
		<OverviewCard
			url='/account/orders'
			icon='shopping basket'
			title={ t('account:overview.card.orders.title') }
			description={ t('account:overview.card.orders.description') }
			/>;

		const cardPaymentMethods =
			<OverviewCard
				url='/account/paymentmethods'
				icon='payment'
				title={ t('account:overview.card.paymentmethods.title') }
				description={ t('account:overview.card.paymentmethods.description') }
				/>;

		const breadcrumb =
		[
			{ label:t('account:overview.title'), }
		];

		return (
            <div className="u-page u-page-account u-page-account-overview">
				<Breadcrumb items={breadcrumb}/>
				<h1>{ t('account:overview.title') }</h1>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column stretched>{ cardOrders }</Grid.Column>
						<Grid.Column stretched>{ cardLoginSecurity }</Grid.Column>
						<Grid.Column stretched>{ cardBalance }</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column stretched>{ cardAddresses }</Grid.Column>
						<Grid.Column stretched>{ cardPaymentMethods }</Grid.Column>
						<Grid.Column stretched>{ cardSettings }</Grid.Column>
					</Grid.Row>
				</Grid>
            </div>
		);
	}
}

export default withNamespaces()(Overview);
