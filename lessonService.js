angular.module('directivePractice').service('lessonService',
function($http,$q){

  this.getSchedule = function (){
    return $http.get('schedule.json').then(function(response){
      return this.schedule = response
    });
  }


  this.removeLesson = function (lesson) {
    console.log(lesson)
    return $http.delete('schedule.json',lesson)


  }
})
