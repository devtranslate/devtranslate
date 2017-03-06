(function () {

    angular
        .module("app")
        .config(configurarRotas);

    configurarRotas.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configurarRotas($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("shell", { 
                    url: "",
                    templateUrl: "app/shell/shell.html",
                    abstract: true,
                    controller: "ShellController",
                    controllerAs: "vm"
                })

                .state("sobre", {
                    parent: "shell",
                    url: "/",
                    templateUrl: "app/sobre/sobre.html"
                })

                .state("artigos", {
                    parent: "shell",
                    url: "/artigos",
                    templateUrl: "app/artigos/artigos.html" 
                })

                .state("documentacao", {
                    parent: "shell",
                    url: "/documentacao",
                    templateUrl: "app/documentacao/documentacao.html" 
                })

                .state("livros", {
                    parent: "shell",
                    url: "/livros",
                    templateUrl: "app/livros/livros.html" 
                })


                .state("projetos", {
                    parent: "shell",
                    url: "/projetos",
                    templateUrl: "app/projetos/projetos.html" 
                })
        ;

        $urlRouterProvider
            .otherwise(function ($injector) {
                var $state = $injector.get("$state");
                $state.go("sobre");
            });

    }

})();