import i18n from 'i18next';

import { reactI18nextModule } from 'react-i18next';

import translationDECheckout 	from '../../locales/de/checkout.json';
import translationDEAccount		from '../../locales/de/account.json';

const resources =
{
	de :
	{
		checkout 	: translationDECheckout,
		account		: translationDEAccount,
	}
};
	
i18n
.use(reactI18nextModule) // if not using I18nextProvider
.init(
{
	resources,
	fallbackLng:	'de',
	debug:			true,
	interpolation:
	{
		escapeValue: false, // not needed for react!!
	},

	// react i18next special options (optional)
	react: 
	{
		wait:		false,
		bindI18n:	'languageChanged loaded',
		bindStore:	'added removed',
		nsMode:		'default'
	}
});

export default i18n;
