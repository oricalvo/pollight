(function () {

    function EventDispatcher() {
        this.handlers = [];
    }

    EventDispatcher.prototype.register = function (name, obj, method) {
        this.handlers.push({
            name: name,
            obj: obj,
            method: method,
        });
    }

    EventDispatcher.prototype.unregister = function (name, obj, method) {
        for (var i = 0; i < this.handlers.length; i++) {
            var handler = this.handlers[i];

            if (handler.name == name && handler.obj == obj && handler.method == method) {
                this.handlers.splice(i, 1);
            }
        }
    }

    EventDispatcher.prototype.raise = function (name) {
        this.handlers.forEach(function (handler) {
            if (handler.name == name) {
                handler.method.apply(handler.obj, arguments);
            }
        });
    }

    angular.module("app").service("eventDispatcher", EventDispatcher);

})();
