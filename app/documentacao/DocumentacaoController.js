(function () {

    angular
        .module("app")
        .controller("DocumentacaoController", documentacaoController);

    documentacaoController.$inject = ["$http"];

    function documentacaoController($http) {
        var vm = this;

        vm.documentacao = [];
        vm.totalDocumentacao = 0;
        vm.documentacaoPorPagina = 9;
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
            var getURL = "https://api.backand.com:443/1/objects/Documentacao";

            var configuracao = {
                headers: {
                    'AnonymousToken': 'cad0ddc8-560d-40dc-90ea-4562435951ed'
                },
                params: {
                    "exclude": "__metadata",
                    "pageSize": vm.documentacaoPorPagina,
                    "pageNumber": pageNumber,
                    "filter": [
                        { "fieldName": "nomeDoc", "operator": "contains", "value": vm.userSearch }
                    ]
                }
            };

            $http
                .get(getURL, configuracao)
                .then(function (response) {
                    vm.totalDocumentacao = response.data.totalRows;
                    vm.documentacao = response.data.data;
                });
        }
    }

})();