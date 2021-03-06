define(['avalon', 'userCenter', 'jquery', 'dialog', 'mmState'], function (avalon, userCenter, $) {
    var vmodels = avalon.vmodels,
        vmMain = vmodels['main'];
    return avalon.define({
        $id: "login",
        username: "",
        password: "",
        state: "",
        head: 'imgs/1.jpg',   //大logo
        login: function(e){ //点击登陆
            e.preventDefault();
            userCenter.clear();
            var _username = avalon.vmodels.login.username;
            var _password = avalon.vmodels.login.password;
            //测试账号: 15683384295 zxcvbnm
            if(!_username){return $.Dialog.fail("请输入学号");}
            if(!_password){return $.Dialog.fail("请输入密码");}

            userCenter.login(_username, _password, function(err, user){
                if(err) {
                    $.Dialog.fail("登陆失败! 请检查用户名和密码");
                    return;
                }
                return (user.completed ? setTimeout(avalon.router.navigate.bind(avalon.router, ''), 0) : setTimeout(avalon.router.navigate.bind(avalon.router, '/user/complete'), 0));
            });
        },
        rendered: function(){
        }
    });
});