//import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import '../sass/ui/ui.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import App from './App';
import i18n from './i18n';



ReactDOM.render( 
	<I18nextProvider i18n={i18n}>
		<App/>
	</I18nextProvider>,
	document.getElementById("root") );
