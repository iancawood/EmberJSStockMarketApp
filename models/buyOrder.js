App.BuyOrder = DS.Model.extend({
    date: DS.attr('string', { defaultValue: function() { return new Date(); }}),
    size: DS.attr('number'),
    price: DS.attr('number'),
    company: DS.belongsTo('company')
});