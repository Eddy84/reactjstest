import * as React from "react";

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';


import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export interface BaseProps
{
}
export interface BaseState
{
}



export class Base<P extends BaseProps,T extends BaseState> extends React.Component<P,T> 
{
	render()
	{
		return	<div>
					{ this.renderHeader() }
					{ this.renderContent() }
					{ this.renderFooter() }
				</div>;
	}
	renderContent()
	{
		return <div className="ui-page">page</div>;
	}

	renderHeader()
	{
		return <Header/>;
	}
	renderFooter()
	{
		return <Footer/>;
	}
}
