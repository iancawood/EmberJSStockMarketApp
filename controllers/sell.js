App.SellController = Ember.Controller.extend({
    actions: {
        save: function(companyID){
            var company = this.store.find('company', companyID);

            var newOrder = this.store.createRecord('sellOrder', {
                size: $('#sellShare').val(),
                price: $('#sellPrice').val(),
                isBuy: true,
                company: company
            });

            newOrder.save().then(function() {
                company.get('sellOrders').pushObject(newOrder);
            });
        }
    }
});


