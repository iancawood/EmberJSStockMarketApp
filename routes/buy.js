App.BuyRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('company', params.company_id);
    },
    renderTemplate: function() {
        this.render({ outlet: 'content' });
    }
});