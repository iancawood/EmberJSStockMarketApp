App.SellRoute = Ember.Route.extend({
   renderTemplate: function() {
        this.render({ outlet: 'content' });
   }
});