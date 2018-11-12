import * as React from "react";

import { Link } from "react-router-dom";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

export interface AddressCardProps
{
    country:string;
	firstname:string;
	lastname:string;
	address1:string;
    address2:string;
    city:string;
    county:string;
    postcode:string;
    phone:string;
}

class AddressCardImpl extends React.Component<AddressCardProps & WithNamespaces,any>
{
    render()
    {
        const {t} = this.props;

        let components = [];
        let i=1;

        components.push(<div key={i++}><b>{ this.props.firstname } {this.props.lastname }</b></div>);

        if(this.props.address1.length > 0)  components.push(<div key={i++}>{ this.props.address1 }</div>);
        if(this.props.address2.length > 0)  components.push(<div key={i++}>{ this.props.address2 }</div>);

        components.push(<div key={i++}>{ this.props.postcode } { this.props.city }</div>);

        if(this.props.country.length > 0)   components.push(<div key={i++}>{ this.props.country }</div>);
        if(this.props.county.length > 0)    components.push(<div key={i++}>{ this.props.county }</div>);
        if(this.props.phone.length > 0)     components.push(<div key={i++}>{ this.props.phone }</div>);

        return  <Card>
                    <Card.Content>
                        { components }
                    </Card.Content>
                    <Card.Content textAlign="right">
                        <Link to="/account/addresses/edit">{ t('account:addresscard.edit.label' ) }</Link><span> | </span>
                        <Link to="/asd">{ t('account:addresscard.delete.label' ) }</Link><span> | </span>
                        <Link to="/asd">{ t('account:addresscard.setdefault.label' ) }</Link>
                    </Card.Content>
                </Card>
    }
}

export const AddressCard = withNamespaces()(AddressCardImpl);