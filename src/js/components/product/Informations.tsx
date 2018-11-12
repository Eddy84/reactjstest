import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface ProductInformationsProps
{
	product : any;
}

export class ProductInformations extends React.Component<ProductInformationsProps, {}> 
{
	render()
	{
		let tableRows = [];

		for(let i=0;i<this.props.product.attributes.length;++i)
		{
			tableRows.push(
						<tr key={i}>
							<td className="u-label">{ this.props.product.attributes[i].label }</td>
							<td className="u-value">{ this.props.product.attributes[i].value}</td>
						</tr>);
		}
		return	<Section title="Produktinformation">
				<a id="informations"/>
				<div className="u-grid">
					<div className="u-col">
						<Section title="Produktdetails" type="info">
							<div className="u-content">
								<table className="u-product-attributes">
									<tbody>
										{ tableRows }
									</tbody>
								</table>
							</div>
						</Section>
					</div>
					<div className="u-col">
						<Section title="Zusätzliche Produktionformationen" type="info">
						</Section>
						<Section title="Rückgabe" type="info">
						</Section>
					</div>
				</div>
				</Section>
	}
}
