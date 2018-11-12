import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';

import { Carousel } from '../../components/carousel/Carousel';
import { ImageBox } from '../../components/imagebox/ImageBox';
import { Section } from '../../components/section/Section';

import { ProductDescription } 		from '../../components/product/Description';
import { ProductDeliveryMessage } 	from '../../components/product/DeliveryMessage';
import { ProductFeatures } 			from '../../components/product/Features';
import { ProductIndications } 		from '../../components/product/Indications';
import { ProductInformations } 		from '../../components/product/Informations';
import { ProductPrice } 			from '../../components/product/Price';
import { ProductShippingMessage } 	from '../../components/product/ShippingMessage';
import { ProductQuantity } 			from '../../components/product/Quantity';

import { MerchantInfo } 			from '../../components/merchant/Info';

import { Steps } 					from '../../components/steps/Steps';
import CheckoutAddress 				from '../../components/checkout/Address';
import CheckoutPaymentMethod		from '../../components/checkout/FormPaymentMethod';


export interface CheckoutProps extends BaseProps
{
	match;
}

export interface CheckoutState extends BaseState
{
}

const g_steps =
[
	{ label: "Adresse"},
	{ label: "Bezahlmethode"},
	{ label: "Versandart"},
	{ label: "Bestellübersicht"},
	{ label: "Bezahlung"},
];

export class Checkout extends Base<CheckoutProps & WithNamespaces, CheckoutState> 
{
	static defaultProps =
	{
	}
	renderContent()
	{
		const {t} = this.props;
		const {step} = this.props.match.params;

		console.log("step: "+step);

		let formComponent = null;

		if(step == 0)
		{
			formComponent = <CheckoutAddress/>;
		}
		if(step == 1)
		{
			formComponent = <CheckoutPaymentMethod/>;
		}

		return (
			<div className="u-page u-checkout">
				<Steps items={g_steps} activeIndex={step}/>
			{ formComponent }
			</div>
		);
	}
}

export default withNamespaces()(Checkout);
