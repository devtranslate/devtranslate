(function () {

    angular
        .module("app", [
            "ui.router",
            "angularUtils.directives.dirPagination"
        ])
        .run(inicializarApp);

    inicializarApp.$inject = [];

    function inicializarApp() {
    }

})();