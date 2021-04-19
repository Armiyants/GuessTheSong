import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Category } from '../../models/common';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[];
  public selectedCategories: Category[] = [];

  constructor(
    private categoryService: CategoriesService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.categories = this.categoryService.getAllCategories();
    // this.categories.map(ctg => ctg.selected = false);
  }

  selectCategories(categoryId): void {
    const selectedCategory = this.categories.find(ctg => ctg.id === categoryId);
    if (!this.selectedCategories.some(ctg => ctg.id === categoryId)) {
      this.selectedCategories.push(selectedCategory);
      selectedCategory.selected = true;
    } else {
      this.selectedCategories = this.selectedCategories.filter(ctg => ctg.id !== categoryId);
      selectedCategory.selected = false;
    }
  }

  startGame(): void {
    console.log(this.selectedCategories.length);

    if (this.selectedCategories.length > 4) {
      this.notificationService.showInfo('Please select 4 categories');
      return;
    }
    this.categoryService.selectedCategories = this.selectedCategories;
    this.router.navigate(['game']);
    localStorage.setItem('categories', JSON.stringify(this.selectedCategories));
  }
}
