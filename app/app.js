/* eslint-disable-next-line import/no-unresolved */
import Application from '@ember/application';
/* eslint-disable-next-line import/no-unresolved */
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
/* eslint-disable-next-line import/no-unresolved */
import config from './config/environment';

const App = Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
