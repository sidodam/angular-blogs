import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  myForm: FormGroup;
  notLogged: boolean = false;

  constructor(
    private authService: AuthServiceService,
    private userData: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onLogIn() {
    const username = this.myForm.get('username')?.value;
    const password = this.myForm.get('password')?.value;

    const ourtDataArr = this.userData.userData;
    const found =
      ourtDataArr.some((user) => user.username == username) &&
      ourtDataArr.some((user) => user.password == password);

    if (found) {
      this.router.navigate(['/blogs']);
      this.authService.login();
    } else {
      this.notLogged = true;
    }
  }
}
