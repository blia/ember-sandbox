import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  post: DS.belongsTo('post')
});
