import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from 'src/app/services/toggle-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'news-blog';
  themeState = false;
  constructor(private toggleService: ToggleStateService) {}

  ngOnInit(): void {
    this.toggleService.currentState.subscribe(
      (theme) => (this.themeState = theme)
    );
  }
}
