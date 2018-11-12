import * as React from "react";
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Auth } from '../auth/Auth';

export interface PrivateRouteProps extends RouteProps
{
    auth : Auth;
}

export class PrivateRoute extends Route<PrivateRouteProps>
{
    render()
    {
        let {auth:Auth,component,...rest} = this.props;
        let renderComponent = null;

        return <Route {...rest} render={props =>
            {
                if(this.props.auth.isAuthenticated()) 
                {
                    return <this.props.component {...props}/>;
                }
                else
                {
                    console.log({pathname:"/login",state:{from:props.location}});
                    return <Redirect to={{pathname:"/login",state:{from:props.location}}}/>;
                }
                
            }}/>;
    }
}