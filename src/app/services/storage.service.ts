import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  set (key: string, data: any): void {
    const dataStr = JSON.stringify(data);
    localStorage.setItem(key, dataStr);
  }

  get (key: string): any {
    const dataStr = localStorage.getItem(key);
    return JSON.parse(dataStr);
  }

  remove (key: string): void {
    localStorage.removeItem(key);
  }

}
