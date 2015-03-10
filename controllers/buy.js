App.BuyController = Ember.Controller.extend({
    actions: {
        save: function(companyID){
            var company = this.store.find('company', companyID);

            var newOrder = this.store.createRecord('buyOrder', {
                size: $('#buyShare').val(),
                price: $('#buyPrice').val(),
                isBuy: true,
                company: company
            });

            this.get('content').get('buyOrders').pushObject(newOrder);
            //newOrder.save();

            // transaction

            var sellOrders = this.get('content').get('sellOrders').toArray().sort(function(a, b) {
                return a.get('price') - b.get('price')
            });

            var idsToDelete = [];
            var volume = 0;

            debugger;

            for (var i = sellOrders.length-1; i>=0; i--) {
                if (newOrder.get('price') >= sellOrders[i].get('price')) {

                    if (newOrder.get('size') > sellOrders[i].get('size')) {
                        volume += +sellOrders[i].get('size');
                        idsToDelete.push(sellOrders[i].get('id'));
                        newOrder.set('size', +newOrder.get('size') - +sellOrders[i].get('size'));

                    } else if (newOrder.get('size') == sellOrders[i].get('size')) {
                        volume += +newOrder.get('size');
                        idsToDelete.push(sellOrders[i].get('id'));
                        newOrder.set('size', "0");
                        break;

                    } else {
                        volume += +newOrder.get('size');
                        sellOrders[i].set('size', +sellOrders[i].get('size') - +newOrder.get('size'));
                        newOrder.set('size', "0");
                        break;
                    }
                }
            }

            for (var i = 0; i<idsToDelete.length; i++) {
                console.log(idsToDelete[i]);
                this.store.find('sellOrder', idsToDelete[i]).then(function(order) {
                    order.destroyRecord();
                });
            }

            if (volume != 0)
            {
                this.get('content').set('shareVolume', +this.get('content').get('shareVolume') + +volume);
            }

            if (newOrder.get('size') == 0) {
                this.store.find('buyOrder', newOrder.get('id')).then(function(order) {
                    debugger;
                    order.destroyRecord();
                });
            }

            //var orderID = company.get('buyOrders').toArray()[0].get('id');
            //this.store.find('buyOrder', buyOrderID)
            //company.get('buyOrders').objectAt(0).set('price', "3");
        }
    }
});


