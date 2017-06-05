/**
 * Created by zheng on 2017/5/16.
 * Js-Type : index
 * Last Modefiend time: 2017/5/16 19:42
 */

(function (angular) {
    var mainController = angular.module('app.controllers.main',[]);

    mainController.controller('MainController', ['$scope','$location', function ($scope,$location) {

        //文本框数据模型
        $scope.text = [];

        //任务列表也需要一个
        //每个任务的结构 都尽量添加一个Id
        $scope.todoList = [
            {id: 0.121, text: '跑步20分钟', completed: false, display:true},
            {id: 0.212, text: '看书20分钟', completed: false, display:true},
            {id: 0.313, text: '看电视半小时', completed: true , display:true},
            {id: 0.441, text: '休息半小时', completed: false , display:true},
            {id: 0.568, text: '打游戏', completed: false , display:true},
        ];

        //添加数据
        $scope.add = function () {
            if($scope.text == ''){
                return;
            }
            $scope.todoList.push({
                //id 自增	删除时使用id查询会出现重复现象
                //id: $scope.todoList.length,
                id: $scope.getId(),	//使用随机数定义唯一id
                // 由于$scope.text 是双向数据绑定 add 的同时可以通过它拿到文本框就值
                text:$scope.text,
                completed: false,
                display: true
            });
            //清空文本模型数据
            $scope.text = '';
        }
        //删除
        $scope.delete = function (index) {
            for(var i =0; i <$scope.todoList.length; i++) {
                if(index === $scope.todoList[i].id) {
                    $scope.todoList.splice(i,1);
                    break;
                }
            }
            console.log('ddddd');
        }
        //生成随机数id
        $scope.getId = function () {
            var tid = Math.random();	//
            //递归函数必须要有匹配的结束结束条件 否则就是死循环
            for(var i =0; i <$scope.todoList.length; i++) {
                //如果tid 恒等于 id 就重新获取id
                if(tid === $scope.todoList[i].id){
                    tid = getId();
                    break;
                }
            }
            return tid;
        }
        //显示
        $scope.sactive = function () {
            for(var i=0; i< $scope.todoList.length; i++) {
                $scope.todoList[i].display = true;
                if($scope.todoList[i].completed) {
                    console.log($scope.todoList[i].completed);
                    $scope.todoList[i].display = false;
                }
            }
            console.log(222);
        }
        //隐藏
        $scope.dnone = function () {
            for(var i=0; i< $scope.todoList.length; i++) {
                $scope.todoList[i].display = true;
                if($scope.todoList[i].completed == false) {
                    console.log($scope.todoList[i].completed);
                    $scope.todoList[i].display = false;
                }
            }
            console.log(666);
        }
        //显示所有
        $scope.alls = function () {
            for(var i=0; i< $scope.todoList.length; i++) {
                $scope.todoList[i].display = true;
            }
            console.log(999);
        }

        //清空已完成任务
        $scope.clear = function () {
            console.log('ccccc');
            var todoResult = [];
            for(var i=0; i < $scope.todoList.length; i++) {
                if($scope.todoList[i].completed == false) {
                    todoResult.push($scope.todoList[i]);
                    //console.log($scope.todoList[i].completed);
                }
            }
            $scope.todoList = todoResult;
        }
        // 是否有已经完成的
        $scope.existCompleted = function () {
            //该函数必须有返回值
            for(var i=0; i< $scope.todoList.length; i++) {
                if($scope.todoList[i].completed == true) {
                    return true;
                }
            }
            return false;
        }
		//显示所有任务
        var checkNow = true;
        $scope.toggleAll = function () {
            console.log(123123);
            for(var i=0; i < $scope.todoList.length; i++) {
                $scope.todoList[i].completed = checkNow;
            }
            checkNow = !checkNow;	//这样写变量值始终是相对的 实现一键切换效果
        }
        //编辑文本
        $scope.editText = function (cid) {
            $scope.currentEidtId = cid;
        }
        $scope.stopEdit = function (cid) {
            $scope.currentEidtId = -1;
        }


        //状态筛选
        $scope.selecter = {};
        $scope.$location = $location;
        //状态监视器
        $scope.$watch('$location.path()', function (now,old) {
            console.log(now);
            switch (now){
                case '/active':
                    $scope.selecter = {completed:false};
                    break;
                case '/completed':
                    $scope.selecter = {completed:true};
                    break;
                default :
                    $scope.selecter = {};
                    break;
            }
        });
        //自定义比较函数, 默认filter过滤器使用的是模糊匹配
        //$scope.equalCompare = function (source,target) {
        //	console.log(source);
        //	console.log(target);
        //	return source === target;
        //}
    }]);

})(angular);
