App.MarketController = Ember.Controller.extend({
    sortedBuyOrders: function() {
        return this.get('content').get('buyOrders').toArray().sortBy('price').slice(0,10);
    }.property('content.buyOrders.@each'),

    sortedSellOrders: function() {
        return this.get('content').get('sellOrders').toArray().sortBy('price').slice(0,10);
    }.property('content.sellOrders.@each'),

    groupedBuyOrders: function() {
        //return this.get('content').get('buyOrders').toArray().sortBy('price');
        var orders = [
            {
                price: 100,
                size: 15
            },
            {
                price: 111,
                size: 16
            }
        ];
        return orders;
    }.property('content.buyOrders.@each'),

    groupedSellOrders: function() {
        return this.get('content').get('sellOrders').toArray().sortBy('price').slice(0,10);
    }.property('content.sellOrders.@each'),

    actions: {
        doSomething: function(){
            debugger;
            console.log("thing");
        }
    }
});


