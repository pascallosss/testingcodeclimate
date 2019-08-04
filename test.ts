'use strict';

class WerktDit {

  constructor(private $http,
              private _) {}
  
  private kaas() {
    console.log('kaassssss');
  }
  
 private kaas2 () {
   // TODO: lalala
 }
}

angular
    .module('app')
    .service('WerktDit', ['$http', WerktDit]);
