
App.BuyController = Ember.Controller.extend({
    actions: {
        save: function(companyID){
            var company = this.store.find('company', companyID);
            console.log(company);

            this.store.createRecord('order', {
                size: 11,
                price: 10
            });
        }
    }
});


