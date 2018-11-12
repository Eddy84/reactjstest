import * as React from "react";

import { SearchResultItem } from './SearchResultItem';

export interface SearchResultListProps
{
	items : object[]
}

export class SearchResultList extends React.Component<SearchResultListProps, {}>
{
	render() 
	{ 
		let itemComponents = [];

		for(let i=0;i<this.props.items.length;++i)
		{
			itemComponents.push( <SearchResultItem key={i} item={ this.props.items[i] } />);
		}
		return	<ul className="u-search-result-list">{itemComponents}</ul>; 
	}
}
