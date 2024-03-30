import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public name: string ="Ironman";
  public age:  number =45;
  public vers: string = `Angular ${VERSION.full} is rad`;
}
