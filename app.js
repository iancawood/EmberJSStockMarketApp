App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationSerializer = DS.LSSerializer.extend();
App.CompanyAdapter = DS.FixtureAdapter;
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'App'
});