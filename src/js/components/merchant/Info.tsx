import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Section } from '../section/Section';

export interface Props
{
	merchant : any;
}

export class MerchantInfo extends React.Component<Props, {}> 
{
	render()
	{
		return	<div className="u-font-size-small">
					<span>Verkauf durch <a>{ this.props.merchant.name }</a> und <a>Versand durch Amazon</a>. Für weitere Informationen, Impressum, AGB und Widerrufsrecht klicken Sie bitte auf den Verkäufernamen. Geschenkverpackung verfügbar.</span>
				</div>
	}
}
