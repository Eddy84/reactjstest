import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface Props
{
	product : any;
}

export class ProductDeliveryMessage extends React.Component<Props, {}> 
{
	render()
	{
		return	<div className="u-font-size-small">
					<span><b>Lieferung Dienstag, 6. Nov.:</b> Bestellen Sie jetzt per <b>Premiumversand</b> an der Kasse. <a>Siehe Details</a>.</span>
				</div>
	}
}
