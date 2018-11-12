import * as React from "react";

import { Link } from "react-router-dom";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export interface PaymentMethodCardNewProps
{
}

class PaymentMethodCardNewImpl extends React.Component<PaymentMethodCardNewProps & WithNamespaces,any>
{
    render()
    {
        const {t} = this.props;

        return  <Card>
                    <Card.Content style={{ display:'flex' }}>
                        <Grid centered style={{ flex:'1' }}>
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column textAlign='center'>
                                    <Link to='/account/paymentmethods/add'><Icon name='plus' size='huge'/>
                                        <br/>
                                        <span>{ t('account:paymentmethod.add.label' )}</span>
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
    }
}

export const PaymentMethodCardNew = withNamespaces()(PaymentMethodCardNewImpl);