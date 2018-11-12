import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface ProductDescriptionProps
{
	product : any;
}

export class ProductDescription extends React.Component<ProductDescriptionProps, {}> 
{
	render()
	{
		let desc : string = this.props.product.description.replace(/\n/g,'<br>');

		return	<Section title="Produktbeschreibung">
					<div className="u-content" dangerouslySetInnerHTML={{__html:desc}}></div>
				</Section>
	}
}
