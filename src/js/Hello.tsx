import * as React from "react";
import { Container,Button,Input,Label } from 'reactstrap';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> 
{
	render()
	{
		return <Container fluid={ true }>
			<h1>Hello as from {this.props.compiler} and {this.props.framework}!as!</h1>
				<Button color="danger">Danger!</Button>
				<Label for="quantity">Menge:</Label>
				<Input type="number" value={2} id="quantity"/>
			</Container>;
	}
}
