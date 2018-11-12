import * as React from "react";


import { Carousel as CarouselResponsive } from 'react-responsive-carousel';


export interface ImageBoxProps
{
	items;
	axis : string;
}

export interface ImageBoxState
{
	activeIndex : number,
}

export class ImageBox extends React.Component<ImageBoxProps, ImageBoxState> 
{
	static defaultProps =
	{
		items : [],
		axis : "vertical",
	}

	constructor(props:ImageBoxProps)
	{
		super(props);
		this.state = {activeIndex:0};
	}

	onMouseEnter(e,index)
	{
		this.setState({activeIndex:index});
	}

	render()
	{
		let thumbnails = [];
		let images = [];

		for(let i=0;i<this.props.items.length;++i)
		{
			let classNames = ["u-image-box-thumbnail"];
			if(i==this.state.activeIndex) classNames.push("u-active");

			thumbnails.push(
					<li key={i} className={classNames.join(' ')}>
						<img src={this.props.items[i].url} onMouseEnter={(e) => this.onMouseEnter(e,i)}/>
					</li>
			);
		}
		for(let i=0;i<this.props.items.length;++i)
		{
			let classNames = ["u-image-box-image"];
			if(i==this.state.activeIndex) classNames.push("u-active");

			images.push(
					<li key={i} className={classNames.join(' ')}>
						<img src={this.props.items[i].url}/>
					</li>
			);
		}

		return (
			<div className={"u-image-box u-image-box-"+this.props.axis}>
				<ul className="u-image-box-thumbnails">{ thumbnails }</ul>
				<ul className="u-image-box-container">{ images }</ul>
			</div>
		);
	}
}
