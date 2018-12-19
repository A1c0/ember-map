/* eslint-disable-next-line import/no-extraneous-dependencies */
import {setApplication} from '@ember/test-helpers';
import {start} from 'ember-qunit';
/* eslint-disable-next-line import/no-unresolved */
import Application from '../app';
import config from '../config/environment';

setApplication(Application.create(config.APP));

start();
