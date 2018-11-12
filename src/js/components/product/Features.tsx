import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

export interface ProductFeaturesProps
{
	product : any;
}

export class ProductFeatures extends React.Component<ProductFeaturesProps, {}> 
{
	render()
	{
		let features = [];

		for(let i=0;i<this.props.product.features.length;++i)
		{
			let label = this.props.product.features[i].label;

			features.push(<li key={i}><span>{ label }</span></li>);
		}

		return <div className="u-product-features"><ul>{features}</ul></div>;
	}
}
