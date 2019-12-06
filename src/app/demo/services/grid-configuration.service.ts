import { Injectable } from '@angular/core';

@Injectable()
export class GridConfigurationService {

  constructor(storage: Storage) { 
  }

  getConfiguration(gridId: string): Object {
    return JSON.parse(window.localStorage.getItem(gridId));
  }

  saveConfiguration(gridId: string, config: Object) {
    window.localStorage.setItem(gridId, JSON.stringify(config));
  }
}
