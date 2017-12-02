import { Injectable } from '@angular/core';
import { StorageService } from 'app/services/storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HueApiConfigurationService {

  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) { }

}
