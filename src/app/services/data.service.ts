import { Injectable } from '@angular/core';
import { userData } from '../models/usersData.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
 
  // need to simulate async fetching here:
  userData: userData[] = [
    new userData('sido', 'nidonido'),
    new userData('jon', 'doe1234'),
  ];
}
