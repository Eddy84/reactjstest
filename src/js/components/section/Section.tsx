import * as React from "react";

export interface SectionProps
{
	className : string;
	title : string;
	type : string;
}
export class Section extends React.Component<SectionProps, {}>
{
	static defaultProps =
	{
		className : "",
		title : "",
		type : "main",
	}

	render()
	{
		let classNames = ["u-section", "u-section-"+this.props.type, this.props.className];

		return 	<div className={ classNames.join(' ') }>
					<hr/>
					<h2 className="u-section-header">{this.props.title}</h2>
					<div className="u-section-content">
						{ this.props.children }
					</div>
				</div>;
	}
}
