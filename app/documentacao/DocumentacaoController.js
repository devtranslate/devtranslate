(function () {

    angular
        .module("app")
        .controller("DocumentacaoController", documentacaoController);

    documentacaoController.$inject = ["$http"];

    function documentacaoController($http) {
        var vm = this;

        vm.documentacao = [];
        vm.documentacaoPorPagina = 9;
        vm.userSearch = "";
        vm.paginacao = {
            current: 1
        }

        activate();

        function activate() {
            var getURL = "api/documentacao/documentacao.json";

            $http
                .get(getURL)
                .then(function (response) {
                    vm.documentacao = response.data.data;
                });
        }
    }

})();