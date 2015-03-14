var myApp = angular.module('scenari', ['uiSwitch']);

myApp.controller('ScenariListCtrl', function ($scope) {

  $scope.reinitialiseForm = function(){
      $scope.nom="";
      $scope.description="";
      $scope.actif=true;
      $scope.actions=[];
  };

  $scope.reinitialiseForm();
  
  $scope.ajouterScenario = function() {
      $scope.scenari.push({nom:$scope.nom, description:$scope.description, actif:$scope.actif, actions:[]});
      $scope.reinitialiseForm();
  };
  
  $scope.chargeForm = function(scenario) {
      $scope.nom = scenario.nom;
      $scope.description = scenario.description;
      $scope.actif = scenario.actif;
  };

  $scope.toggleActif = function(scenario) {
    scenario.actif = !scenario.actif;
  };

  $scope.remove = function(item){ 
    var index=$scope.scenari.indexOf(item);
    $scope.scenari.splice(index,1);     
  };


  $scope.editScenario = function(item){ 
    var selectItem = $scope.scenari[$scope.scenari.indexOf(item)];
    $scope.chargeForm(selectItem);
    $scope.remove(item);
  }

  $scope.debutDef = function(str){
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
