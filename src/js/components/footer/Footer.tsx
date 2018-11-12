import * as React from "react";
import { Link } from 'react-router-dom';


import { Grid } from 'semantic-ui-react';

export interface FooterProps
{
}

export class Footer extends React.Component<FooterProps, {}>
{
	render() 
	{ 
		return	<div><Grid columns={16} className="footer">
					<Grid.Row className="footerTop">
						<Grid.Column width={16}>
							<Link to="">Zurück zum Seitenanfang</Link>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className="footerContent">
						<Grid.Column width={4}/>
						<Grid.Column width={8}>
							<Grid columns={12} centered>
								<Grid.Row>
									<Grid.Column width={3}>{ this.renderNewsletter() }</Grid.Column>
									<Grid.Column width={3}>{ this.renderAboutUs() }</Grid.Column>
									<Grid.Column width={3}>{ this.renderPayMethods() }</Grid.Column>
									<Grid.Column width={3}>{ this.renderHelp() }</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Column>
						<Grid.Column width={4}/>
					</Grid.Row>
					<Grid.Row className="footerBottom">
						<Grid.Column width={4}/>
						<Grid.Column width={8}>
							<Link to={"/AGB"}>Unsere AGB</Link>
							<Link to={"/Datenschutz"}>Unsere AGB</Link>
							<Link to={"/Impressum"}>Impressum</Link>
							<span>&copy; 2018 rising faction GmbH</span>
						</Grid.Column>
						<Grid.Column width={4}/>
					</Grid.Row>	
				</Grid></div>; 
	}
	renderNewsletter()
	{
		return 	<div className="footerNewsletter">
					<div className="footerColumnHeader">Newsletter</div>
					<span>Newsletter: News, Trends und Angebote per E-Mail. Die Abmeldung ist jederzeit möglich.</span>
				</div>
	}
	renderAboutUs()
	{
		return 	<div>
					<div className="footerColumnHeader">Über Uns</div>
					<ul>
						<li><Link to="/p/creditcards">Karriere</Link></li>
						<li><Link to="/p/billing">Pressemitteilungen</Link></li>
						<li><Link to="/p/paypal">Blog</Link></li>
						<li><Link to="/p/directdebig">Impressum</Link></li>
					</ul>
				</div>
	}
	renderPayMethods()
	{
		return 	<div>
					<div className="footerColumnHeader">Zahlungsarten</div>
					<ul>
						<li><Link to="/p/creditcards">Kreditkarten</Link></li>
						<li><Link to="/p/billing">Rechnung</Link></li>
						<li><Link to="/p/paypal">Paypal</Link></li>
						<li><Link to="/p/directdebig">Bankeinzug</Link></li>
					</ul>
				</div>
	}
	renderHelp()
	{
		return 	<div>
					<div className="footerColumnHeader">Hilfe</div>
					<ul>
						<li><Link to="/p/creditcards">Lieferung verfolgen</Link></li>
						<li><Link to="/p/billing">Versand & Verfügbarkeit</Link></li>
						<li><Link to="/p/paypal">Rückgabe & Ersatz</Link></li>
						<li><Link to="/p/directdebig">Hilfe</Link></li>
					</ul>
				</div>
	}
}
