(function () {

    function ContactListCtrl() {
    }

    ContactListCtrl.prototype.remove = function (contact) {
        //this.contacts.splice(index, 1);
        this.onRemoving({ contact: contact });
    }

    angular.module("app").directive("contactList", function () {
        var ddo = {
            restrict: "E",
            templateUrl: "/app/ContactList.html",
            controller: ContactListCtrl,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                contacts: "=",
                onRemoving: "&",
            }
        };

        return ddo;
    });

})();
