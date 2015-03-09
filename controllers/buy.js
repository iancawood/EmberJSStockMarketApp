App.BuyController = Ember.Controller.extend({
    actions: {
        save: function(companyID){
            var company = this.store.find('company', companyID);

            this.store.createRecord('buyOrder', {
                size: $('#buyShare').val(),
                price: $('#buyPrice').val(),
                isBuy: true,
                company: company
            });
        }
    }
});


