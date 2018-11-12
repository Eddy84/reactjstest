import * as React from "react";
import * as _ from "lodash";

import {Typeahead} from 'react-bootstrap-typeahead';

import { Search } from 'semantic-ui-react';

const g_search_results = _.times(5,(i) =>
	({
		key: i,
		title: 'Acer Notebook GameMaster',
		description : 'Gaming notebook für fortgeschrittene',
		image :  'https://images-eu.ssl-images-amazon.com/images/I/41gQmoI+djL._AC_US218_.jpg',
	})
);

export interface SearchBarProps
{
}

export class SearchBar extends React.Component<SearchBarProps, {}>
{
	render()
	{

		return	<div className="u-searchbar">
					<Search fluid={true} input={{fluid:true}} results={g_search_results} placeholder="z.B. Acer Notebook"/>
				</div>;
	}
}

