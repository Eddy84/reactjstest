import * as React from "react";

import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Form,FormGroup,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';

enum StepState
{
	Complete	= "complete",
	Active		= "active",
	InComplete	= "incomplete",
}
export interface StepProps
{
	itemIndex		: number;
	item			: object|string;
	labelKey 		: string;
	stepState		: StepState;
}

export class Step extends React.Component<StepProps,{}>
{
	static defaultProps =
	{
		itemIndex	: 0,
		item 		: {},
		labelKey 	: "label",
		stepState	: StepState.InComplete,
	};

	render()
	{
		const label  				= this.props.item[this.props.labelKey] || "";
		const stepState : string 	= this.props.stepState;

		return <div className={ ["ui-step", "ui-step-state-"+stepState].join(' ') }>
				<div className="ui-step-number">{ this.props.itemIndex + 1 }</div>
				<span className="ui-label">{ label }</span>
			</div>;
	}
}

export interface StepsProps
{
	items 			: object[];
	readOnly 		: boolean;
	activeIndex 	: number;
	labelKey 		: string;
}

export class Steps extends React.Component<StepsProps, {}> 
{
	static defaultProps =
	{
		items			: [],
		readOnly 		: true,
		activeIndex 	: 0,
		labelKey 		: "label",
	};

	render()
	{
		let itemComponents = [];
		for(let i=0;i<this.props.items.length;++i)
		{
			const StepItem = Step;

			let stepState : StepState = i == this.props.activeIndex ? StepState.Active : i < this.props.activeIndex ? StepState.Complete : StepState.InComplete;

			itemComponents.push( <StepItem key={i} itemIndex={i} item={this.props.items[i]} labelKey={this.props.labelKey} stepState={stepState}/>);
		}
		return <div className="ui-steps">{ itemComponents }</div>;
	}
}
