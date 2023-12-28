import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  name = '';
  userId = 0;
  address = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((map) => {
      const name = map.get('name');
      console.log('Name ' + name);
      this.name = name || '';
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.userId = params['userId'];
    });

    this.address =
      this.activatedRoute.snapshot.queryParamMap.get('address') || '';
  }
}
