import * as React from "react";

import { Link } from "react-router-dom";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

export interface Address
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

export interface PaymentMethod
{
    name:string;
}


export interface PaymentMethodCardProps
{
    address : Address;
    paymentMethod : PaymentMethod;
}

class PaymentMethodCardImpl extends React.Component<PaymentMethodCardProps & WithNamespaces,any>
{
    render()
    {
        const {t} = this.props;

        let components = [];
        let i=1;

        components.push(<div key={i++}><b>{ this.props.address.firstname } {this.props.address.lastname }</b></div>);

        if(this.props.address.address1.length > 0)  components.push(<div key={i++}>{ this.props.address.address1 }</div>);
        if(this.props.address.address2.length > 0)  components.push(<div key={i++}>{ this.props.address.address2 }</div>);

        components.push(<div key={i++}>{ this.props.address.postcode } { this.props.address.city }</div>);

        if(this.props.address.country.length > 0)   components.push(<div key={i++}>{ this.props.address.country }</div>);
        if(this.props.address.county.length > 0)    components.push(<div key={i++}>{ this.props.address.county }</div>);
        if(this.props.address.phone.length > 0)     components.push(<div key={i++}>{ this.props.address.phone }</div>);

        return  <Card>
                    <Card.Content>
                        
                        <Card.Header><Icon name="credit card"/>{ this.props.paymentMethod.name}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        { components }
                    </Card.Content>
                    <Card.Content textAlign="right">
                        <Link to="/account/addresses/edit">{ t('account:paymentmethod.edit.label' ) }</Link><span> | </span>
                        <Link to="/asd">{ t('account:paymentmethod.delete.label' ) }</Link><span> | </span>
                        <Link to="/asd">{ t('account:paymentmethod.setdefault.label' ) }</Link>
                    </Card.Content>
                </Card>
    }
}

export const PaymentMethodCard = withNamespaces()(PaymentMethodCardImpl);