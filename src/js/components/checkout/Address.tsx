import * as React from "react";

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,CustomInput,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';


export interface CheckoutAddressProps
{
}



export class CheckoutAddress extends React.Component<CheckoutAddressProps & WithNamespaces, {}> 
{
	render()
	{
		const {t} = this.props;

		return (
			<Container fluid={ true }>
				<Form>
					 <FormGroup row>
						<Label for="typ" sm={2}></Label>
						<Col sm={10}>
							<CustomInput type="checkbox" id="co_type_private" label={ t('checkout:form.address.type.private') } inline />
							<CustomInput type="checkbox" id="co_type_business" label={ t('checkout:form.address.type.business') } inline />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_company_form" sm={2} size="sm">{ t('checkout:form.address.company_form.label') }</Label>
						<Col sm={10}>
							<Input id="company_form" type="select" bsSize="sm">
								<option value={0}>Bitte wählen</option>
								<option value={1}>Einzelunternehmen</option>
								<option value={2}>Kapitalgesellschaft (GmbH, AG, e.G.)</option>
								<option value={3}>Öffentliche Auftraggeber / Vereine</option>
								<option value={4}>Personengesellschaft (GbR, KG, OHG)</option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_company_type" sm={2} size="sm">{ t('checkout:form.address.company_type.label') }</Label>
						<Col sm={10}>
							<Input id="company_type" type="select" bsSize="sm">
								<option value={0}>Bitte wählen</option>
								<option value={1}>Gewerblicher Endkunde</option>
								<option value={2}>Wiederverkäufer</option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_company" sm={2} size="sm">{ t('checkout:form.address.company.label') }</Label>
						<Col sm={10}>
							<Input id="co_company" type="text" bsSize="sm" placeholder={ t('checkout:form.address.company.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_vatid" sm={2} size="sm">{ t('checkout:form.address.vatid.label') }</Label>
						<Col sm={10}>
							<Input id="co_vatid" type="text" bsSize="sm" placeholder={ t('checkout:form.address.vatid.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="salutation" sm={2} size="sm">{ t('checkout:form.address.salutation') }</Label>
						<Col sm={4}>
						<Input id="salutation" type="select" bsSize="sm">
							<option value={'mr'}>Herr</option>
							<option value={'ms'}>Frau</option>
						</Input>
						</Col>
						<Label for="title" sm={2} size="sm">{ t('checkout:form.address.title') }</Label>
						<Col sm={4}>
						<Input id="salutation" type="select" bsSize="sm">
							<option value={''}>Kein Titel</option>
							<option value={'dr'}>Dr.</option>
							<option value={'prof'}>Prof.</option>
						</Input>
						</Col>
					</FormGroup>
					
					<FormGroup row>
						<Label for="co_firstname" sm={2} size="sm">{ t('checkout:form.address.firstname.label') }</Label>
						<Col sm={10}>
						<Input id="co_firstname" type="text" bsSize="sm" placeholder={ t('checkout:form.address.firstname.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_lastname" sm={2} size="sm">{ t('checkout:form.address.lastname.label') }</Label>
						<Col sm={10}>
						<Input id="co_lastname" type="text" bsSize="sm" placeholder={ t('checkout:form.address.lastname.placeholder') }/>
						</Col>
					</FormGroup> 
					<FormGroup row>
						<Label for="co_street" sm={2} size="sm">{ t('checkout:form.address.street.label') }</Label>
						<Col sm={8}>
						<Input id="co_street" type="text" bsSize="sm" placeholder={ t('checkout:form.address.street.placeholder') }/>
						</Col>
						<Col sm={2}>
						<Input id="co_streetno" type="text" bsSize="sm" placeholder={ t('checkout:form.address.streetno.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_zipcode" sm={2} size="sm">{ t('checkout:form.address.city.label') }</Label>
						<Col sm={10}>
						<Input id="co_city" type="text" bsSize="sm" placeholder={ t('checkout:form.address.city.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_country" sm={2} size="sm">{ t('checkout:form.address.country.label') }</Label>
						<Col sm={10}>
							<Input id="co_country" type="text" bsSize="sm" placeholder={ t('checkout:form.address.country.placeholder') }/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="co_email" sm={2} size="sm">{ t('checkout:form.address.email.label') }</Label>
						<Col sm={10}>
						<Input id="co_email" type="text" bsSize="sm" placeholder={ t('checkout:form.address.email.placeholder') }/>
						</Col>
					</FormGroup> 
					<FormGroup row>
						<Label for="co_phone" sm={2} size="sm">{ t('checkout:form.address.phone.label') }</Label>
						<Col sm={10}>
						<Input id="co_phone" type="text" bsSize="sm" placeholder={ t('checkout:form.address.phone.placeholder') }/>
						</Col>
					</FormGroup> 
				</Form>
			</Container>
		);
	}
}

export default withNamespaces()(CheckoutAddress);
