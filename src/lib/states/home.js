//主页
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('home', {
        controller: "main",
        url: "/",
        templateUrl: "tpl/home/yield.html",
        onEnter: function(){
            log('/');
            avalon.scan();
        }
    });
});