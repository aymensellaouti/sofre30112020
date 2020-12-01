import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  constructor(private loggerService: LoggerService) {
    console.log(this.loggerService);
    this.loggerService.logger('cc je suis fakeService');
  }
}
