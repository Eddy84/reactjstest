import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface ProductShippingMessageProps
{
	product : any;
}

export class ProductShippingMessage extends React.Component<ProductShippingMessageProps, {}> 
{
	render()
	{
		return	<div className="u-font-size-small">
					<span>Kostenlose Lieferung ab <b>EUR 29</b> (Bücher immer versandkostenfrei).</span>
				</div>
	}
}
