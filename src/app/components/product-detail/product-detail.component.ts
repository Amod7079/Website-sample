import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private activatedRoutes: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      console.log(params['id']);
    });
  }
}
