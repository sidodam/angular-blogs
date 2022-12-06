import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LogFormComponent } from './components/log-form/log-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewsBlogComponent } from './components/news-blog/news-blog.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';
import { DataService } from './services/data.service';
import { ToggleStateService } from './services/toggle-state.service';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    ThemeTogglerComponent,
    HeaderComponent,
    HomeComponentComponent,
    NewsBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DataService,
    AuthGuardService,
    AuthServiceService,
    ToggleStateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
