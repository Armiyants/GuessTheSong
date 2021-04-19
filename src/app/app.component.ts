import { Component, OnInit } from '@angular/core';
import { Category } from './models/common';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'gushakir-mexedin';

  constructor() { }

}
