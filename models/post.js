/**
 * Created by Abdelkader on 2015-02-01.
 */
// We create a model of type App.Posts
App.Post = DS.Model.extend({
    title: DS.attr(),
    body: DS.attr()
});