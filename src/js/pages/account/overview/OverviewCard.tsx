import * as React from "react";

import { Link } from "react-router-dom";


import { Card } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';
import { SemanticICONS} from 'semantic-ui-react';

export interface OverviewCardProps
{
	url:string;
	icon:SemanticICONS;
	title:string;
	description:string;
}

export interface OverviewCardState
{
}
export class OverviewCard extends React.Component<OverviewCardProps,OverviewCardState>
{
	render()
	{
		return	<Card fluid to={ this.props.url } as={Link}>
					<Card.Content>
						<Item.Group>
							<Item>
							<Icon size="huge" name={ this.props.icon }/>
								<Item.Content>
									<Item.Header>{ this.props.title }</Item.Header>
									<Item.Description>{ this.props.description }</Item.Description>
								</Item.Content>
							</Item>
						</Item.Group>
					</Card.Content>
				</Card>;
	}
}
