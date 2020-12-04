(function() {
    angular.module('myApp').controller('DashboardCtrl',[
        '$http',
        DashboardController
    ])

function DashboardController($http) {
    const vm = this
    vm.getSummary = function(){
        const url = 'http://localhost:3003/api/billingSummary'
        $http.get(url).then(function(response){  //resposta da api
            const {credit = 0.0, debt = 0.0} = response.data //valor padrao caso nao seja retornado nada.
            vm.credit = credit
            vm.debt = debt
            vm.total = credit - debt
            console.log("Credito API:" + vm.credit)
            console.log("Debito API:" + vm.debt)
            console.log("Consolidado API:" + vm.total)
        })

    }
    vm.getSummary()
}})()
