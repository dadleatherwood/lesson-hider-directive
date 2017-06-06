angular.module('directivePractice').directive('lessonHider', function() {
  return {
    templateUrl: "lessonHider.html",
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&', //passing a function,
      deleteLesson: '&'
    },
    link: function(scope, element, attributes) {
      scope.checkBoxClicked = function(lesson) {
        if (scope.check) {
          element.css('textDecoration', 'line-through')
        } else {
          element.css('textDecoration', 'none')
        }
      }
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        for (var i = 0; i < scope.schedule.length; i++) {
          if (scope.lesson === scope.schedule[i].lesson) {
            scope.lessonDay = scope.schedule[i].weekday; element.css('textDecoration', 'line-through')
            return;
          }
        }
      })
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule()
    }
  }
});

//THREE DIFFERENT OPTIONS FOR SCOPE:

// scope: {

//   twoWayDataBinding: '=', ~ Two-way data binding means that our directive and its parent controller (lessonCtrl in this case) are in constant communication when the value passed in changes. Any changes made will be reflected both in the controller and inside the directive.

//   stringBinding: '@', ~ A string binding simply tries to grab the string value that is passed to it.

//   functionBinding: '&', ~ A function binding allows you to pass a function from the controller into your directive.
// }
