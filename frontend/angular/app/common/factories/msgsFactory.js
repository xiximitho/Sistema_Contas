(function(){
    angular.module('myApp').factory('msgs', [
        'toastr',
        MsgsFactory
    ])

    function MsgsFactory(toastr){
        function addMsg(msgs,title,method){
            if(msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg,title))
            } else {
                toastr[method](msgs,title)
            }
        }

        function addSucess(msgs){
            addMsg(msgs,'Sucesso','sucess') //sucess do toastr
        }

        function addError(msgs){
            addmsg(msgs,'Erro', 'error') //error toastr
        }
        return { addSucess, addError}
    }
})()