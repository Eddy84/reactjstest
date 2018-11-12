import * as React from "react";
import { Link } from 'react-router-dom';

import { Container,Row,Col } from 'reactstrap';

import { Badge } from '../badge/Badge';

export interface Article
{
	title : string,
	image : string,
	slug : string,
}
export interface Item
{
	price 	: string,
	article	: Article,
}

export interface SearchResultItemProps
{
	item,
}

export class SearchResultItem extends React.Component<SearchResultItemProps, {}>
{

	render() 
	{ 
		const articleId = this.props.item.id;
		const slug = this.props.item.article.slug;
		const p = "";

		return	<li className="u-search-result-item">
					<div className="u-flex-box u-flex-direction-row">
						<div className="u-flex-cell u-flex-nogrow u-flex-noshrink">
							<Link to="/article/1233">
								<img className="u-search-result-item-image" src={this.props.item.article.image}/>
								<Badge className="u-search-result-item-badge">Bestseller</Badge>
							</Link>
						</div>
						<div className="u-flex-cell u-flex-grow u-search-result-item-content">
							<div>
								<Link to={`/${slug}/a/${articleId}/${p}`}><span className="u-font-size-large">{this.props.item.article.name}</span></Link>
							</div>
							<div>
								<span className="u-font-size-medium u-color-price u-font-weight-bold">{this.props.item.price}</span>
								<span className="u-font-size-small u-color-price"> ({this.props.item.pricePerUnit})</span>
							</div>
							<div>
								<span className="u-font-size-small u-color-info">Lieferung bis </span>
								<span className="u-font-size-small u-color-success u-font-weight-bold">Freitag, 2. November</span>
							</div>
							<div>
								<span className="u-font-size-small u-color-info">kostenlose Lieferung möglich</span>
							</div>
							<div>
								<span className="u-font-size-small u-color-warning">Nur noch 10 verfügbar!</span>
							</div>
						</div>
						<div className="u-flex-cell u-flex-nogrow u-flex-noshrink">
						</div>
					</div>
				</li>; 
	}
}
