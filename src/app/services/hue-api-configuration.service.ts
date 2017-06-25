import { Injectable } from '@angular/core';
import { StorageService } from 'app/services/storage.service';
import { Http } from '@angular/http';

@Injectable()
export class HueApiConfigurationService {

  constructor(
    private storageService: StorageService,
    private http: Http
  ) { }

}
