import * as React from "react";
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { SearchBar } from '../searchbar/SearchBar';


export interface HeaderProps
{
}

export class Header extends React.Component<HeaderProps, {}>
{
	render() 
	{ 
		return	<Grid className="u-navigation">
					<Grid.Row>
						<Grid.Column width={3}/>
						<Grid.Column width={10}>
							<SearchBar/>
						</Grid.Column>
						<Grid.Column width={3}>
							<Link to="/account" className="u-navigation-link">
								<span className="large text">Max Mustermann</span><br/>
								<b>Dein Account</b>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>;
	}
}
