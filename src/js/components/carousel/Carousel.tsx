import * as React from "react";


import { Carousel as CarouselResponsive } from 'react-responsive-carousel';


export interface CarouselProps
{
	items;
}

export interface CarouselState
{
}

export class Carousel extends React.Component<CarouselProps, CarouselState> 
{
	render()
	{
		return (
			<div className="u-carousel">
				<div className="u-carousel-thumbnails">
				</div>
				<div className="u-carousel-asd">
				</div>
			</div>
		);
	}
}
