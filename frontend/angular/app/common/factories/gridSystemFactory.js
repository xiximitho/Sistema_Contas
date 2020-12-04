angular.module('myApp').factory('gridSystem',[
    function(){
        function toCss(numbers){
            const cols = numbers ? numbers.split('') : []
            let classes = ''

            if(cols[0]) classes += `col-xs-${cols[0]}`
            if(cols[1]) classes += `col-sm-${cols[0]}`
            if(cols[2]) classes += `col-md-${cols[0]}`
            if(cols[3]) classes += `col-lg-${cols[0]}`
            

            return classes
        }
        return {toCss}
    }
])