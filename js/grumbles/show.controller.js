"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "$stateParams",
    "$firebaseObject",
    GrumbleShowControllerFunction
  ])

  function GrumbleShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref().child("grumbles/" + $stateParams.id);
    $firebaseObject(ref).$loaded().then(function(grumble){
      vm.grumble = grumble
    });

    vm.update = function(grumble){
      vm.grumble.$save();
    }
  }
})();
