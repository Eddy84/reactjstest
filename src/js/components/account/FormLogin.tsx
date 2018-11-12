import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Button,Input,Checkbox,Form,Label } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

//import { Form,FormGroup,CustomInput,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';

export interface Props
{
	onLogin?		: React.MouseEventHandler<any>;
	onRegister?		: React.MouseEventHandler<any>;
}

export class FormLogin extends React.Component<Props & WithNamespaces, {}>
{
	render()
	{
		const {t} = this.props;
		return	<Form>
					<h3>{ t('account:form.login.title') }</h3>
					<Form.Field>
						<label>{ t('account:form.login.firstname.label') }</label>
						<Input placeholder={ t('account:form.login.firstname.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('account:form.login.password.label') }</label>
						<Input placeholder={ t('account:form.login.password.placeholder') } type='password'/>
					</Form.Field>
					<Form.Field>
						<Checkbox label={ t('account:form.login.rememberme.label')}/>
					</Form.Field>
					<Button fluid type='submit' onClick={this.props.onLogin}>{ t('account:form.login.submit.label')}</Button>
					<Divider horizontal>{ t('account:form.login.new.label')}</Divider>
					<Button fluid type='submit' onClick={this.props.onRegister}>{ t('account:form.login.register.label')}</Button>
				</Form>;
	}
}

export default withNamespaces()(FormLogin);
