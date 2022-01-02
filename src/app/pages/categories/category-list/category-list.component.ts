import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.categoryService.getAll().subscribe(categories => this.categories = categories,
      error => alert('Erro ao carregar a lista'));
  }

  deleteCategory(id: number) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(id).subscribe(() => this.categories = this.categories.filter(c => c.id != id));
    }
  }
}
