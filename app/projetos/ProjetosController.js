(function () {

    angular
        .module("app")
        .controller("ProjetosController", projetosController);

    projetosController.$inject = ["$http"];

    function projetosController($http) {
        var vm = this;

        vm.projetos = [];
        vm.totalProjetos = 0;
        vm.projetosPorPagina = 9;
        vm.userSearch = "";
        vm.paginacao = {
            current: 1
        }

        vm.paginaAlterada = function (newPage) {
            getPage(newPage);
        }

        activate();

        function activate() {
            getPage(1);
        }

        function getPage(pageNumber) {
            var getURL = "https://api.backand.com:443/1/objects/Projetos";

            var configuracao = {
                headers: {
                    'AnonymousToken': 'cad0ddc8-560d-40dc-90ea-4562435951ed'
                },
                params: {
                    "exclude": "__metadata",
                    "pageSize": vm.projetosPorPagina,
                    "pageNumber": pageNumber,
                    "filter": [
                        { "fieldName": "nomeProjeto", "operator": "contains", "value": vm.userSearch }
                    ]
                }
            };

            $http
                .get(getURL, configuracao)
                .then(function (response) {
                    vm.totalProjetos = response.data.totalRows;
                    vm.projetos = response.data.data;
                });
        }
    }

})();