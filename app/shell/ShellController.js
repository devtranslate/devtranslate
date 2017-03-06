(function () {

    angular
        .module("app")
        .controller("ShellController", shellController);

    shellController.$inject = ["$state"];

    function shellController($state) {
        var vm = this;

        vm.stateAtivo = function (nomeState) {
            return nomeState == $state.current.name;
        }
    }

})();