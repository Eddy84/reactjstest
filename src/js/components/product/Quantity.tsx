import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface Props
{
	product : any;
}

export class ProductQuantity extends React.Component<Props, {}> 
{
	render()
	{
		return	<div className="u-font-size-small">
					<span className="u-font-size-medium u-color-available u-font-weight-bold">{this.props.product.quantity} Auf Lager.</span>
				</div>
	}
}
