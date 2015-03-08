App.Router.map(function() {
    this.resource('stockMarketSummary', {path:"/"}, function() {
        this.resource('buy', { path:'/buy/:company_id'});
        this.resource('market', { path:'/market/:company_id'});
        this.resource('sell', { path:'/sell/:company_id'});
    });
});
