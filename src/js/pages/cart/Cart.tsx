import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';


export interface CartProps extends BaseProps
{
}

export interface CartState extends BaseState
{
}



export class Cart extends Base<CartProps & WithNamespaces, CartState> 
{
	render()
	{
		const {t} = this.props;

		return (
			<Container fluid={ true }>
			cart
			</Container>
		);
	}
}

export default withNamespaces()(Cart);
