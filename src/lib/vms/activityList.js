
define(['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'activityList',
        items: []
    });

    vm.$watch('items', function(data){
        console.log(data);
    });
    return vm;
});