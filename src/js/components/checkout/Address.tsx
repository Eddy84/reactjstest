import * as React from "react";

import { withNamespaces,WithNamespaces } from 'react-i18next';

//import { Form,FormGroup,CustomInput,Input,Label } from 'reactstrap';
//import { Container,Row,Col } from 'reactstrap';

import { Button,Input,Checkbox,Form,Label,Select } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export interface CheckoutAddressProps
{
}

const g_company_form_opts =
[
	{ key:0, value:"", text:"Bitte wählen"},
	{ key:1, value:"sp", text:"Einzelunternehmen"},
	{ key:2, value:"kg", text:"Kapitalgesellschaft (GmbH, AG, e.G)"},
	{ key:3, value:"ov", text:"Öffentliche Auftraggeber / Vereine"},
	{ key:4, value:"pg", text:"Personengesellschaft (GbR, KG, OHG)"}
]

const g_company_type_opts =
[
	{ key:0, value:"", text:"Bitte wählen"},
	{ key:1, value:"ge", text:"Gewerblicher Endkunde"},
	{ key:2, value:"wv", text:"Wiederverkäufere"}
]

const g_salutation_opts =
[
	{ key:0, value:"", text:"Bitte wählen"},
	{ key:1, value:"mr", text:"Herr"},
	{ key:2, value:"ms", text:"Frau"}
]
const g_title_opts =
[
	{ key:0, value:"", text:"Bitte wählen"},
	{ key:1, value:"dr", text:"Dr."},
	{ key:2, value:"pr", text:"Prof."}
]
export class CheckoutAddress extends React.Component<CheckoutAddressProps & WithNamespaces, {}> 
{
	render()
	{
		const {t} = this.props;

		return	<div>
				<Form>
					 <Form.Field>
						<Checkbox size='mini' id="co_type_private" label={ t('checkout:form.address.type.private') } inline />
						<Checkbox size='mini' id="co_type_business" label={ t('checkout:form.address.type.business') } inline />
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.company_form.label') }</label>
						<Select size='mini' options={g_company_form_opts}/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.company_type.label') }</label>
						<Select size='mini' options={g_company_type_opts}/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.company.label') }</label>
						<Input id="co_company" size='mini' placeholder={ t('checkout:form.address.company.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.vatid.label') }</label>
						<Input id="co_vatid" size='mini' placeholder={ t('checkout:form.address.vatid.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.salutation') }</label>
						<Select size='mini' options={g_salutation_opts}/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.title') }</label>
						<Select size='mini' options={g_title_opts}/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.firstname.label') }</label>
						<Input size='mini' placeholder={ t('checkout:form.address.firstname.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.lastname.label') }</label>
						<Input id="co_lastname" size='mini' placeholder={ t('checkout:form.address.lastname.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.address1.label') }</label>
						<Input id="co_address1" size='mini' placeholder={ t('checkout:form.address.address1.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.address2.label') }</label>
						<Input id="co_address2" size='mini' placeholder={ t('checkout:form.address.address2.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.zipcode.label') }</label>
						<Input id="co_zipcode" size='mini' placeholder={ t('checkout:form.address.zipcode.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.country.label') }</label>
						<Input id="co_country" size='mini' placeholder={ t('checkout:form.address.country.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.email.label') }</label>
						<Input id="co_email" size='mini' placeholder={ t('checkout:form.address.email.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('checkout:form.address.phone.label') }</label>
						<Input id="co_phone" size='mini' placeholder={ t('checkout:form.address.phone.placeholder') }/>
					</Form.Field>
				</Form>
			</div>;
	}
}

export default withNamespaces()(CheckoutAddress);
