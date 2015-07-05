angular.module("ef.demo", []).controller("FormCtrl", ["$scope", function($scope){

    $scope.formData = {};
    $scope.viewData = {};

    var fd = $scope.formData,
        vd = $scope.viewData;

    vd.itemError = {
        1: 'item1不能为空',
        2: 'item1格式不正确',
        3: 'item1已存在相同值',
        4: 'item2格式不正确',
        5: 'item3不能为空',
        6: 'item3已存在相同值'
    };

    initErrCode();
    function initErrCode(){
        vd.item1ErrorCode = 0;
        vd.item2ErrorCode = 0;
        vd.item3ErrorCode = 0;
    }

    function validate(){

        initErrCode();
        $scope.errorTips = [];

        if(!fd.item1){
            vd.item1ErrorCode = 1;
        }else{
            var reg = /([a-zA-Z]{2,4})/;
            if(!reg.test(fd.item1)){
                vd.item1ErrorCode = 2;
            }
            if(fd.item1 == 'aaa'){
                vd.item1ErrorCode = 3;
            }
        }

        if(!!fd.item2){
            var reg = /([0-9]{3,})/;
            if(!reg.test(fd.item2)){
                vd.item2ErrorCode = 4;
            }
        }

        if(!fd.item3){
            vd.item3ErrorCode = 5;
        }else{
            if(fd.item3 == 'bbb'){
                vd.item3ErrorCode = 6;
            }
        }

        if(vd.item1ErrorCode !== 0){
            $scope.errorTips.push({
                item: 'item1',
                errCode: vd.item1ErrorCode
            })
        }
        if(vd.item2ErrorCode !== 0){
            $scope.errorTips.push({
                item: 'item2',
                errCode: vd.item2ErrorCode
            })
        }
        if(vd.item3ErrorCode !== 0){
            $scope.errorTips.push({
                item: 'item3',
                errCode: vd.item3ErrorCode
            })
        }

        if($scope.errorTips.length > 0){
            return false;
        }else{
            return true;
        }

    };

    $scope.focusItem = function(tip){
        angular.element('#' + tip.item).focus();
    }

    $scope.save = function(){
        if(!validate()){
            return;
        }
        alert("save succeed!")
    };

}]);
