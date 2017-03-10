(function () {

    angular
        .module("app")
        .controller("ProjetosController", projetosController);

    projetosController.$inject = ["$http"];

    function projetosController($http) {
        var vm = this;

        vm.projetos = [];
        vm.projetosPorPagina = 9;
        vm.userSearch = "";
        vm.paginacao = {
            current: 1
        }

        activate();

        function activate() {
            var getURL = "api/projetos/projetos.json";

            $http
                .get(getURL)
                .then(function (response) {
                    vm.projetos = _.orderBy(response.data.data, ["nomeProjeto"], ["asc"]);
                });
        }
    }

})();