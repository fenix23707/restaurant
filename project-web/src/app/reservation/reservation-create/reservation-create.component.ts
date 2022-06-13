import { Component, OnInit } from '@angular/core';
import {TableElement} from "../../core";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTableChosen(table: TableElement) {
    console.log(table);
  }
}
