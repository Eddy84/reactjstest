import * as React from "react";
import {Base,BaseProps,BaseState} from '../../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Breadcrumb } from '../../../components/breadcrumb/Breadcrumb';

import { Card } from 'semantic-ui-react';
import { Button,Input,Checkbox,Form,Label,Dropdown,Icon } from 'semantic-ui-react';

import { AddressCard,AddressCardProps } from './AddressCard';
import { AddressCardNew } from './AddressCardNew';

export interface AddressAddProps extends BaseProps
{
}

export interface AddressAddState extends BaseState
{
}

export class AddressAdd extends Base<AddressAddProps & WithNamespaces, AddressAddState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;

		const breadcrumb =
		[
			{ label:t('account:overview.title'), 		url:'/account' 	            },
            { label:t('account:addresses.title'), 		url:'/account/addresses' 	},
            { label:t('account:addressadd.title'), 		url:'' 	},
		];

		return (
            <div className="u-page u-page-width-small u-page-account u-page-account-addresses">
                <Breadcrumb items={breadcrumb}/>
                <h2>{ t('account:addressadd.title') }</h2>
				<Form>
                    <Form.Field>
						<label>{ t('account:form.country.label') }</label>
						<Dropdown className='mini' placeholder={ t('account:form.country.placeholder') } fluid search selection/>
					</Form.Field>
					<Form.Field>
						<label>{ t('account:form.firstname.label') }</label>
						<Input size='mini' placeholder={ t('account:form.firstname.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.lastname.label') }</label>
						<Input size='mini' placeholder={ t('account:form.lastname.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.address1.label') }</label>
						<Input size='mini' placeholder={ t('account:form.address1.placeholder') }/>
                        <label/>
						<Input size='mini' placeholder={ t('account:form.address2.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.city.label') }</label>
						<Input size='mini' icon='search' placeholder={ t('account:form.city.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.postcode.label') }</label>
						<Input size='mini' placeholder={ t('account:form.postcode.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.state.label') }</label>
						<Dropdown className='mini' placeholder={ t('account:form.state.placeholder') } fluid search selection/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.county.label') }</label>
						<Input size='mini' placeholder={ t('account:form.county.placeholder') }/>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.phone.label') }</label>
						<Input size='mini' placeholder={ t('account:form.phone.placeholder') }/>
                        <i><Icon name='info' size='small'/>{ t('account:addressesadd.phone.info') }</i>
					</Form.Field>
					<Button fluid type='submit'>{ t('account:addressadd.submit.label')}</Button>
				</Form>
            </div>
		);
	}
}

export default withNamespaces()(AddressAdd);