/* eslint-disable-next-line import/no-unresolved */
import EmberRouter from '@ember/routing/router';
/* eslint-disable-next-line import/no-unresolved */
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(() => ({
}));

export default Router;
