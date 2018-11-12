import * as React from "react";

import { Link } from "react-router-dom";
import { Breadcrumb as BreadcrumbWrapped } from 'semantic-ui-react';

export interface BreadcrumbItem
{
    url? : string;
    label: string;
}
export interface BreadcrumbProbs
{
    items : BreadcrumbItem[];
}

export class Breadcrumb extends React.Component<BreadcrumbProbs,any>
{
    render()
    {
        let components = [];
        for(let i=0,j=0;i<this.props.items.length;++i)
        {
            let item : BreadcrumbItem = this.props.items[i];

            if(i < this.props.items.length - 1)
            {
                components.push(<BreadcrumbWrapped.Section key={j++} to={item.url} as={Link}>{ item.label }</BreadcrumbWrapped.Section>);
                components.push(<BreadcrumbWrapped.Divider key={j++} icon='right angle'/>);
            }
            else
            {
                components.push(<BreadcrumbWrapped.Section key={j++}>{ item.label }</BreadcrumbWrapped.Section>);
            }
        }

        return <BreadcrumbWrapped>{ components }</BreadcrumbWrapped>;
    }
}