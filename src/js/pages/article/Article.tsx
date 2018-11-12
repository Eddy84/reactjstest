import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';


import { Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

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


export interface ArticleProps extends BaseProps
{
	article;
}

export interface ArticleState extends BaseState
{
}

import { g_article } from '../../stores/Faker';
import { g_images } from '../../stores/Faker';




export class Article extends Base<ArticleProps & WithNamespaces, ArticleState> 
{
	static defaultProps =
	{
		article : g_article
	}
	renderContent()
	{
		const {t} = this.props;

		console.log(this.props);
		return (
			<div className="u-product">
				<div className="u-flex-box">
					<div className="u-flex-cell u-flex-none">
						<ImageBox items={g_images}/>
					</div>
					<div className="u-flex-cell u-product-common">
						<h1>{ this.props.article.product.title }</h1>
						<hr/>
						<ProductPrice product={ this.props.article.product }/>
						<ProductShippingMessage product={ this.props.article.product }/>
						<br/>
						<ProductQuantity product={ this.props.article.product }/>
						<ProductDeliveryMessage product={ this.props.article.product }/>
						<hr/>
						<ProductFeatures product={ this.props.article.product }/>
						<a href="#informations">Weitere Produktdetails</a>
					</div>
					<div className="u-flex-cell u-flex-none u-product-buybox">
					</div>
				</div>
				

				<Container fluid={true} style={{padding:'20px'}}>
				<ProductInformations product={ this.props.article.product }/>
				<ProductIndications product={ this.props.article.product }/>
				<ProductDescription product={ this.props.article.product }/>
				<Section title="Wird oft zusammen gekauft">
					<div className="u-content">
			asd asdasd
			asd
			asd
			asd
					</div>
				</Section>
				<Section title="Kunden, die diesen Artikel angesehen haben, haben auch angesehen">
				</Section>
				</Container>
			</div>
		);
	}
}

export default withNamespaces()(Article);
