import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PlansComponent } from "./plans/plans.component";
import { QuestionaryComponent } from "./questionary/questionary.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    template: `

  `,
    imports: [RouterOutlet, LoginComponent, PlansComponent, QuestionaryComponent]
})
export class AppComponent {
  title = 'diabe-track';
  counter = '10';
}
