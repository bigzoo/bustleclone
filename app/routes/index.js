import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //return this.store.findAll('article');
    return Ember.RSVP.hash({
      toparticles: this.store.findAll('toparticle'),
      articles: this.store.findAll('article')
    });
  }
  //function to return first 3 items in model
  //s
});
