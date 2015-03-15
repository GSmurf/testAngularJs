var myApp = angular.module('scenari', ['uiSwitch']);

myApp.controller('ScenariListCtrl', function ($scope) {

  $scope.newScenario = {nom:'', description:'', actif:true, actions:[]};

  $scope.reinitialiseForm = function(){
        $scope.newScenario = {nom:'', description:'', actif:true, actions:[]};
  };
  
  $scope.ajouterScenario = function() {
      $scope.scenari.push($scope.newScenario);
      $scope.reinitialiseForm();
  };
  
  $scope.chargeForm = function(scenario) {
      $scope.newScenario = scenario;
  };

  $scope.supprimerAction = function(action) {
    var index=$scope.newScenario.actions.indexOf(action);
    $scope.newScenario.actions.splice(index,1);  
  };

  $scope.toggleActif = function(scenario) {
    scenario.actif = !scenario.actif;
  };

  $scope.remove = function(item){ 
    var index=$scope.scenari.indexOf(item);
    $scope.scenari.splice(index,1);     
  };


  $scope.editScenario = function(item){ 
    $scope.newScenario = $scope.scenari[$scope.scenari.indexOf(item)];
    // $scope.chargeForm(selectItem);
    $scope.remove(item);
  }

  $scope.debutDef = function(str){
    var limite = 40;
    var mess = str.description.substring(0, limite);
    if(str.description.length >= limite){
      mess = mess+'...';
    }
    
    return mess;
  };

  //$scope.scenari = $http.get('js/scenari.json');
  //alert($http.get('./js/scenari.json')); // TODO : http://goo.gl/AvFXxu


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
