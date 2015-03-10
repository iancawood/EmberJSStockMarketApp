App.Company = DS.Model.extend({
    name: DS.attr('string'),
    logo: DS.attr('string'),
    openPrice: DS.attr('number'),
    lastPrice: DS.attr('number'),
    shareVolume: DS.attr('number'),
    buyOrders: DS.hasMany('buyOrder'),
    sellOrders: DS.hasMany('sellOrder')
});