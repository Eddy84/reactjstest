import * as React from "react";
import { withNamespaces,WithNamespaces } from 'react-i18next';

import { Button,Input,Checkbox,Form,Label } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

//import { Form,FormGroup,CustomInput,Input,Label } from 'reactstrap';
import { Container,Row,Col } from 'reactstrap';

export interface Props
{
	onSubmit? : React.MouseEventHandler<any>;
}

export class FormRegister extends React.Component<Props & WithNamespaces, {}>
{
	render()
	{
		const {t} = this.props;
		return	<Form>
					<h3>{ t('account:form.register.title') }</h3>
					<Form.Field>
						<label>{ t('account:form.register.firstname.label') }</label>
						<Input placeholder={ t('account:form.register.firstname.placeholder') }/>
					</Form.Field>
					<Form.Field>
						<label>{ t('account:form.register.password.label') }</label>
						<Input placeholder={ t('account:form.register.password.placeholder') } type='password'/>
						<span><Icon name='info' size='small'/>{ t('account:form.register.password.info') }</span>
					</Form.Field>
                    <Form.Field>
						<label>{ t('account:form.register.passwordrepeat.label') }</label>
						<Input placeholder={ t('account:form.register.password.placeholder') } type='password'/>
					</Form.Field>
					<Form.Field>
						<Checkbox label={ t('account:form.register.rememberme.label')}/>
					</Form.Field>
					<Button fluid type='submit' onClick={this.props.onSubmit}>{ t('account:form.register.submit.label')}</Button>
					<Divider/>
					<span>{ t('account:form.register.login.note' )} </span>
					<a href="/login">{ t('account:form.register.login.label')}</a>
                </Form>;
	}
}

export default withNamespaces()(FormRegister);
