angular.module("ef.demo").controller("Form2Ctrl", ["$scope", function($scope){

    $scope.formData = {};
    $scope.viewData = {};

    var fd = $scope.formData,
        vd = $scope.viewData;

    vd.existItemA = false;
    vd.existItemC = false;
    vd.formErr = false;

    $scope.isExistItemA = function(){
        vd.existItemA = false;
        if(!!fd.itemA){
            if(fd.itemA == 'aaa'){
                vd.existItemA = true;
            }
        }
    };

    $scope.isExistItemC = function(){
        vd.existItemC = false;
        if(!!fd.itemC){
            if(fd.itemC == 222){
                vd.existItemC = true;
            }
        }
    };

    $scope.$watch('[viewData.existItemA, viewData.existItemC]', function(nv, ov){
        if(nv == ov){
            return;
        }
        vd.formErr = false;
        angular.forEach(nv, function(v){
            console.log(v);
            vd.formErr = vd.formErr || v;
        })
    });

    $scope.save = function(){
        alert("form2 save succeed!")
    };

}]);


