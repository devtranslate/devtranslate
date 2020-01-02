(function () {

    angular
        .module("app")
        .controller("LivrosController", livrosController);

    livrosController.$inject = ["$http"];

    function livrosController($http) {
        var vm = this;

        vm.livros = [];
        vm.livrosPorPagina = 9;
        vm.userSearch = "";
        vm.paginacao = {
            current: 1
        }

        activate();

        function activate() {
            var getURL = "api/livros/livros.json";

            $http
                .get(getURL)
                .then(function (response) {
                    vm.livros = _.orderBy(response.data.data, ["nomeLivro"], ["asc"]);
                });
        }
    }

})();