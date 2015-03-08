
App.BuyController = Ember.Controller.extend({
    actions: {
        sendMessage: function(){
            var msg = prompt ('Type your message:');
        }
    }
});


