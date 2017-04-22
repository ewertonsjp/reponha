import { Injectable } from '@angular/core';

/*
  Generated class for the AudienceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AudienceProvider {

  constructor() {

  }

  get() {
    var turmas = [];
    turmas.push({
      id: 1,
      nome: '3º ANO - INFO'
    });
    turmas.push({
      id: 2,
      nome: '4º ANO - INFO'
    });
    return turmas;
  }

}
