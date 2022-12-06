import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ToggleStateService {

  private themeState = new BehaviorSubject<boolean>(false);
  currentState = this.themeState.asObservable();

changState(state:boolean) : void
{
  this.themeState.next(state)
}
 
}
