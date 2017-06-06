angular.module('directivePractice').controller('lessonCtrl', function($scope,lessonService){
  $scope.lessons = lessons;
  $scope.announceDay = function announceDay(lesson,day){
    if(day !== undefined){
      alert(lesson + ' is active on ' + day + ".")
    }
  }
})

var lessons = ['Services','Routing','Directives','Review','Firebase','No server project','Node','Express','Mango'];
