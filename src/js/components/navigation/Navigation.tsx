import * as React from "react";

export interface NavigationProps
{
}

export class NavigationRow extends React.Component<{}, {}>
{
	render() { return <div className="navigation-row">{ this.props.children }</div>; }
}
export class NavigationLeft extends React.Component<{}, {}>
{
	render() { return <div className="navigation-left">{ this.props.children }</div>; }
}
export class NavigationRight extends React.Component<{}, {}>
{
	render() { return <div className="navigation-right">{ this.props.children }</div>; }
}
export class NavigationFill extends React.Component<{}, {}>
{
	render() { return <div className="navigation-fill">{ this.props.children }</div>; }
}

export class Navigation extends React.Component<NavigationProps, {}>
{
	render()
	{
		return (
			<div className="navigation">
			{ this.props.children }
			</div>
		);
	}

	static Row = NavigationRow;
	static Left = NavigationLeft;
	static Right = NavigationRight;
	static Fill = NavigationFill;
}

//Navigation.Row = NavigationRow;
