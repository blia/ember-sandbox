import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('posts', { path: '/' }, function () {
    this.route('post', { path: ':id' })
  })
});
