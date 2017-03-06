(function () {

    angular
        .module("app")
        .controller("LivrosController", livrosController);

    livrosController.$inject = ["$http"];

    function livrosController($http) {
        var vm = this;

        vm.livros = [];
        vm.totalLivros = 0;
        vm.livrosPorPagina = 9;
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
            var getURL = "https://api.backand.com:443/1/objects/Livros";

            var configuracao = {
                headers: {
                    'AnonymousToken': 'cad0ddc8-560d-40dc-90ea-4562435951ed'
                },
                params: {
                    "exclude": "__metadata",
                    "pageSize": vm.livrosPorPagina,
                    "pageNumber": pageNumber,
                    "filter": [
                        { "fieldName": "nomeLivro", "operator": "contains", "value": vm.userSearch }
                    ]
                }
            };

            $http
                .get(getURL, configuracao)
                .then(function (response) {
                    vm.totalLivros = response.data.totalRows;
                    vm.livros = response.data.data;
                });
        }
    }

})();