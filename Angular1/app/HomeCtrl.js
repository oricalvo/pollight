(function () {

    function HomeCtrl(contactService, eventDispatcher, $scope) {
        var me = this;

        this.contactService = contactService;
        this.eventDispatcher = eventDispatcher;

        this.reload();

        this.eventDispatcher.register("contactDeleted", this, this.onContactDeleted);

        $scope.$on("$destroy", function () {
            me.onDestroy();
        });
    }

    HomeCtrl.prototype.onDestroy = function () {
        this.eventDispatcher.unregister("contactDeleted", this, this.onContactDeleted);
    }

    HomeCtrl.prototype.onRemovingContact = function (contact) {
        this.contactService.remove(contact);
    }

    HomeCtrl.prototype.onContactDeleted = function (contact) {
        this.reload();
    }

    HomeCtrl.prototype.reload = function () {
        var me = this;

        this.contactService.getAll().then(function (contacts) {
            me.contacts = contacts;
        });
    }

    angular.module("app").controller("HomeCtrl", HomeCtrl);

})();
