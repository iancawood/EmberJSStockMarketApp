App.BuyOrder = DS.Model.extend({
    date: DS.attr('string', { defaultValue: function() { return new Date(); }}),
    size: DS.attr(),
    price: DS.attr(),
    company: DS.belongsTo('company')
});