import * as React from "react";

export interface BadgeProps
{
	className : string,
}
export class Badge extends React.Component<BadgeProps, {}>
{
	render()
	{
		return <div className={"u-badge u-font-size-small u-color-white u-text-center " + this.props.className}>{ this.props.children }</div>;
	}
}
