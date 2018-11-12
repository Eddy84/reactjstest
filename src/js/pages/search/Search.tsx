import * as React from "react";
import {Base,BaseProps,BaseState} from '../base/Base';

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Grid } from 'semantic-ui-react';

import { SearchResultInfoBar }	from '../../components/searchresult/SearchResultInfoBar';
import { SearchResultFilter }	from '../../components/searchresult/SearchResultFilter';
import { SearchResultList }		from '../../components/searchresult/SearchResultList';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export interface SearchProps extends BaseProps
{
}

export interface SearchState extends BaseState
{
}

import {g_items } from '../../stores/Items';



export class Search extends Base<SearchProps & WithNamespaces, SearchState> 
{
	renderContent()
	{
		const {t} = this.props;

		return (
			<Grid>
				<SearchResultInfoBar/>
				<Grid.Row>
					<Grid.Column width={2}>
						<SearchResultFilter/>
					</Grid.Column>
					<Grid.Column width={12}>
						<SearchResultList items={g_items}/>
					</Grid.Column>
					<Grid.Column width={2}></Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default withNamespaces()(Search);
