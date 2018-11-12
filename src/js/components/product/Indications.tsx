import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface ProductIndicationsProps
{
	product : any;
}

export class ProductIndications extends React.Component<ProductIndicationsProps, {}> 
{
	render()
	{
		let indications = [];

		for(let i=0;i<this.props.product.indications.length;++i)
		{
			let label = this.props.product.indications[i].label;
			let value = this.props.product.indications[i].value.replace(/\n/g,'<br>');
			indications.push(
					<div key={i}>
						<h5 className="u-font-size-medium u-font-weight-bold">{ label }</h5>
						<div dangerouslySetInnerHTML={{__html:value}}></div>
						<br/>
					</div>
			);
		}
		return	<Section title="Wichtige Informationen">
					<div className="u-content">{indications}</div>
				</Section>
	}
}
