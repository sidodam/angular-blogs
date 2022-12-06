import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { NewsBlogComponent } from './components/news-blog/news-blog.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'users', component: ThemeTogglerComponent },
  {
    path: 'blogs',
    canActivate: [AuthGuardService],
    component: NewsBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
