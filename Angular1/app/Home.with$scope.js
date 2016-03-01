(function () {

    function HomeCtrl(contactService, $scope) {
        var me = this;

        this.contactService = contactService;

        this.contacts = this.contactService.getAll();

        $scope.$on("contactDeleted", function (e, args) {
            me.onContactDeleted(args.contact);
        });
    }

    HomeCtrl.prototype.onRemovingContact = function (contact) {
        this.contactService.remove(contact);
    }

    HomeCtrl.prototype.onContactDeleted = function (contact) {
        this.contacts = this.contactService.getAll();
    }

    angular.module("app").directive("home", function () {
        var ddo = {
            restrict: "E",
            templateUrl: "/app/Home.html",
            controller: HomeCtrl,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
            }
        };

        return ddo;
    });

})();
