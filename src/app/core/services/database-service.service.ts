import { Injectable } from '@angular/core';
import dataBase from '../../../locale/database/exemploJSON.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor() { }

  public getEmployees(): any {
    return dataBase;
  }
}
