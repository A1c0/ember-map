/* eslint-disable-next-line import/no-extraneous-dependencies */
/* eslint-disable-next-line import/no-unresolved */
import {setApplication} from '@ember/test-helpers';
/* eslint-disable-next-line import/no-unresolved */
import {start} from 'ember-qunit';
/* eslint-disable-next-line import/no-unresolved */
import Application from '../app';
import config from '../config/environment';

setApplication(Application.create(config.APP));

start();
