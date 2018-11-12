import * as React from "react";

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';


export interface FormPaymentMethodProps
{
}



export class FormPaymentMethod extends React.Component<FormPaymentMethodProps & WithNamespaces, {}> 
{
	render()
	{
		return (
			<Container fluid={ true }>
				<Form>
				</Form>
			</Container>
		);
	}
}


export default withNamespaces()(FormPaymentMethod);
