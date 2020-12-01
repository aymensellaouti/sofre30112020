import { Injectable } from '@angular/core';
import { FakeService } from './fake.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {
    console.log('cc');
  }
  logger(data: unknown) {
    console.log('logger: ', data);
  }
}
