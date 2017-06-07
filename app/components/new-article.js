import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save(){
      var params ={
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        imgUrl: this.get('imgUrl')
      };
      this.sendAction('save', params);
    }
  }
});
