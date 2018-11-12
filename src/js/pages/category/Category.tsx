import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';


export interface CategoryProps extends BaseProps
{
}

export interface CategoryState extends BaseState
{
}



export class Category extends Base<CategoryProps & WithNamespaces, CategoryState> 
{
	render()
	{
		const {t} = this.props;

		return (
			<Container fluid={ true }>
			cartegory
			</Container>
		);
	}
}

export default withNamespaces()(Category);
