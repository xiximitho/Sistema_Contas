(function(){
    angular.module('myApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=', //bidiredional <altera no componente, altera no controller>
        },
        template: `
        <div class="{{ $ctrl.grid}}">
            <div class="form-group">
                <label for="{[$ctrl.id]}">{{ $ctrl.label }}</label>
                <input id="{[$ctrl.id]}" class="form-control" placeholder="{{ $ctrl.placeholder }}" type="{{$ctrl.type }}" ng-model="$ctrl.model"/>
            </div>
        </div>
        `
    })
})()