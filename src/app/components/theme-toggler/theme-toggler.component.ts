import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleStateService } from 'src/app/services/toggle-state.service';
@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css'],
})
export class ThemeTogglerComponent implements OnInit {
  theme = false;
  
  constructor(private toggleService: ToggleStateService) {}

  ngOnInit(): void {

  }

  onchange() {
    
    this.toggleService.changState(this.theme)

  }

}
