(function () {

    function ContactService($rootScope) {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        this.$rootScope = $rootScope;
    }

    ContactService.prototype.getAll = function () {
        var copy = [].concat(this.contacts);
        return copy;
    }

    ContactService.prototype.remove = function (contact) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == contact.id) {
                this.contacts.splice(i, 1);

                this.$rootScope.$broadcast("contactDeleted", { contact: contact });

                return;
            }
        }
    }

    angular.module("app").service("contactService", ContactService);

})();
