import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  imgUrl: DS.attr(),
  author: DS.attr(),
  content: DS.attr()
});
