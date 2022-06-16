import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Restaurant} from "../../core";
import {map} from "rxjs";

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  restaurant!: Restaurant

  ngOnInit(): void {
    this.route.data.pipe(map(value => value['restaurant']))
      .subscribe(restaurant => {
        this.restaurant = restaurant;
      })
  }
}
