import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from 'src/app/services/toggle-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  themeState = false;
  constructor(private toggleService: ToggleStateService) {}

  ngOnInit(): void {
    this.toggleService.currentState.subscribe(
      (theme) => (this.themeState = theme)
    );
  }
}
