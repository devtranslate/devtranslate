(function () {

    angular
        .module("app")
        .controller("ArtigosController", artigosController);

    artigosController.$inject = ["$http"];

    function artigosController($http) {
        var vm = this;

        vm.artigos = [];
        vm.artigosPorPagina = 9;
        vm.userSearch = "";
        vm.paginacao = {
            current: 1
        }

        vm.paginaAlterada = function (newPage) {
            getPage(newPage);
        }

        activate();

        function activate() {
            var getURL = "api/artigos/artigos.json";

            $http
                .get(getURL)
                .then(function (response) {
                    vm.artigos = _.orderBy(response.data.data, ["nomeArtigo"], ["asc"]);
                });
        }
    }

})();