import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonValueService {
  
  sport= signal('');
  categoria = signal('');


}
