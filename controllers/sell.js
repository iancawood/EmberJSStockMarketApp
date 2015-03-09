App.SellController = Ember.Controller.extend({
    actions: {
        save: function(companyID){
            var company = this.store.find('company', companyID);
            this.store.createRecord('sellOrder', {
                size: $('#sellShare').val(),
                price: $('#sellPrice').val(),
                isBuy: true,
                company: company
            });
        }
    }
});


