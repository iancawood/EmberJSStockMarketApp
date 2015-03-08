App.Company = DS.Model.extend({
    name: DS.attr(),
    logo: DS.attr(),
    openPrice: DS.attr(),
    lastPrice: DS.attr(),
    shareVolume: DS.attr()
});