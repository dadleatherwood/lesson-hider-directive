angular.module('directivePractice').controller('lessonCtrl', function($scope,lessonService){
  $scope.lessons = lessons;
  $scope.announceDay = function announceDay(lesson,day){
    if(day !== undefined){
      alert(lesson + ' is active on ' + day + ".")
    }
  }
  $scope.deleteLesson= function(lesson){
    $scope.lessons = $scope.lessons.filter(function(c){
      return lesson !== c
    })
  }
})

var lessons = ['Services','Routing','Directives','Review','Firebase','No server project','Node','Express','Mango'];
