(function () {

    function ContactService($http, eventDispatcher, $q) {
        this.contacts = null;
        this.$http = $http;
        this.$q = $q;
        this.eventDispatcher = eventDispatcher;
    }

    ContactService.prototype.getAll = function () {
        var me = this;

        if (this.contacts) {
            return me.$q.when(me.contacts);
        }

        return this.$http.get("/contacts.json").then(function (res) {
            return me.contacts = res.data;
        });
    }

    ContactService.prototype.remove = function (contact) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == contact.id) {
                this.contacts.splice(i, 1);

                this.eventDispatcher.raise("contactDeleted", { contact: contact });

                return;
            }
        }
    }

    angular.module("app").service("contactService", ContactService);

})();
