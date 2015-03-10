App.MarketController = Ember.Controller.extend({
    sortedBuyOrders: function() {
        return this.get('content').get('buyOrders').toArray().sort(function(a, b) {
            return a.get('price') - b.get('price')
        }).slice(0,10);
    }.property('content.buyOrders.@each'),

    sortedSellOrders: function() {
        return this.get('content').get('sellOrders').toArray().sort(function(a, b) {
            return a.get('price') - b.get('price')
        }).reverse().slice(0,10);
    }.property('content.sellOrders.@each'),

    groupedBuyOrders: function() {
        var sorted =  this.get('content').get('buyOrders').toArray().sort(function(a, b) {
            return a.get('price') - b.get('price')
        });
        var grouped = [];

        for (var i = 0; i < sorted.length; i++) {
            if (i == 0) {
                // if first index
                grouped.push({
                    num: 1,
                    size: +sorted[i].get('size'),
                    price: +sorted[i].get('price')
                });
            } else {
                if (sorted[i - 1].get('price') == sorted[i].get('price')) {
                    // if same price... remove old, sum them and add new
                    var temp = grouped.pop();
                    grouped.push({
                        num: +temp.num + 1,
                        size: +temp.size + +(sorted[i].get('size')),
                        price: +sorted[i].get('price')
                    });
                } else {
                    // if new price
                    grouped.push({
                        num: 1,
                        size: +sorted[i].get('size'),
                        price: +sorted[i].get('price')
                    });
                }
            }
        }
        return grouped.slice(0,10);
    }.property('content.buyOrders.@each'),

    groupedSellOrders: function() {
        var sorted =  this.get('content').get('sellOrders').toArray().sort(function(a, b) {
            return a.get('price') - b.get('price')
        });
        var grouped = [];

        for (var i = 0; i < sorted.length; i++) {
            if (i == 0) {
                // if first index
                grouped.push({
                    num: 1,
                    size: +sorted[i].get('size'),
                    price: +sorted[i].get('price')
                });
            } else {
                if (sorted[i - 1].get('price') == sorted[i].get('price')) {
                    // if same price... remove old, sum them and add new
                    var temp = grouped.pop();
                    grouped.push({
                        num: +temp.num + 1,
                        size: +temp.size + +(sorted[i].get('size')),
                        price: +sorted[i].get('price')
                    });
                } else {
                    // if new price
                    grouped.push({
                        num: 1,
                        size: +sorted[i].get('size'),
                        price: +sorted[i].get('price')
                    });
                }
            }
        }
        return grouped.reverse().slice(0,10);
    }.property('content.sellOrders.@each'),

    actions: {
        doSomething: function(){
            debugger;
            console.log("thing");
        }
    }
});


