import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface ProductPriceProps
{
	product : any;
}

export class ProductPrice extends React.Component<ProductPriceProps, {}> 
{
	render()
	{
		return	<div className="u-font-size-small">
					<span className="u-font-size-medium u-color-price u-font-weight-bold">{this.props.product.price}</span>
					<span className="u-font-size-small u-color-price"> ({this.props.product.pricePerUnit})</span>
					<br/>
					<span>Alle Preisangaben inkl. deutscher USt.</span>
				</div>
	}
}
