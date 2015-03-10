var myApp = angular.module('scenari', []);

myApp.controller('ScenariListCtrl', function ($scope) {

  var init = function(){
      $scope.nom = "";
      $scope.description = "";
      $scope.actif = true;
  };

  init();
  
  $scope.ajouterScenario = function() {
      $scope.scenari.push({nom:$scope.nom, description:$scope.description, actif:$scope.actif, actions:[]});
      init();
  };

  $scope.remove=function(item){ 
    var index=$scope.bdays.indexOf(item)
    $scope.bdays.splice(index,1);     
  }

  $scope.debutDef=function(str){
    return str.description.substring(0, 10)+'...';
  };

  $scope.scenari = [{
        "nom": "scenario 1",
        "description": "deux switch on et un off puis message de fin",
        "actif": true,
        "actions": [{
              "type": "switch",
              "value": "on",
              "id": "1"
            },
            {
              "type": "switch",
              "value": "off",
              "id": "2"
            },
            {
              "type": "switch",
              "value": "on",
              "id": "3"
            },
            {
              "type": "timer",
              "value": "2000"
            },
            {
              "type": "message",
              "value": "2 switch ON 1 OFF !"
            }
        ]
      },
      {
        "nom": "scenario 2",
        "description": "Test desactivé",
        "actif": false,
        "actions": [{
              "type": "message",
              "value": "Désactivé..."
            }
        ]
      },
      {
        "nom": "scenario 3",
        "description": "All ON",
        "actif": true,
        "actions": [{
              "type": "switch",
              "value": "on",
              "id": "1"
            },
            {
              "type": "switch",
              "value": "on",
              "id": "2"
            },
            {
              "type": "switch",
              "value": "on",
              "id": "3"
            },
            {
              "type": "message",
              "value": "All ON Dude !!!"
            }
        ]
      }
  ];
});
