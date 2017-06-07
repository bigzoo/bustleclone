import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      toparticles:this.store.findAll('toparticle'),
      articles:this.store.findAll('article');
    });
  }
  actions: {
    saveParent(params){
      //console.log('fired from child component');
      //debugger;
      var newArticle = this.store.createRecord('article',params);
      newArticle.save();
    }
  }
});
