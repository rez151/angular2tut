import { Component, OnInit } from '@angular/core';
import { HeroService } from "./hero.service";


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService]

})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  constructor() { }

  ngOnInit() {
  }

}
