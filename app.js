/**
 * Created by Abdelkader on 2015-01-31.
 */
App = Ember.Application.create();

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'App'
});

var orders = [
    {	company : "Microsoft Corporation (MSFT)",
        type: "buy",
        bv: 0,
        bp: 0,
        sv: null,
        sb: null },

    {	company : "Microsoft Corporation (MSFT)",
        type: "buy",
        bv: 0,
        bp: 0,
        sv: null,
        sb: null }

];

var order = {
    company : "Microsoft Corporation (MSFT)",
    type: "Buy",
    volume: 0,
    price: 0
};