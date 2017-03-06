(function () {

    angular
        .module("app")
        .controller("ArtigosController", artigosController);

    artigosController.$inject = ["$http"];

    function artigosController($http) {
        var vm = this;

        vm.artigos = [];
        vm.totalArtigos = 0;
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
            getPage(1);
        }

        function getPage(pageNumber) {
            var getURL = "https://api.backand.com:443/1/objects/Artigos";

            var configuracao = {
                headers: {
                    'AnonymousToken': 'cad0ddc8-560d-40dc-90ea-4562435951ed'
                },
                params: {
                    "exclude": "__metadata",
                    "pageSize": vm.artigosPorPagina,
                    "pageNumber": pageNumber,
                    "filter": [
                        { "fieldName": "nomeArtigo", "operator": "contains", "value": vm.userSearch }
                    ]
                }
            };

            $http
                .get(getURL, configuracao)
                .then(function (response) {
                    vm.totalArtigos = response.data.totalRows;
                    vm.artigos = response.data.data;
                });
        }
    }

})();