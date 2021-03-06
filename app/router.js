import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  this.resource('posts', {path: '/posts/'}, function(){
    this.route('new');
    this.route('post', {path: ':post_id'});
  });
  this.route('events');
});

export default Router;
