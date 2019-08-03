'use strict';

class WerktDit {

  constructor(private $http,
              private _) {}
  
  private kaas() {
    console.log('kaas');
  }
}

angular
    .module('app')
    .service('WerktDit', ['$http', WerktDit]);
