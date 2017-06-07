import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('article');
  }
  //function to return first 3 items in model
  //s
});
