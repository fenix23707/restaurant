import {Component, Input, OnInit} from '@angular/core';
import {SchemeService} from "../../../core/services/scheme.service";

@Component({
  selector: 'app-free-table-count',
  templateUrl: './free-table-count.component.html',
})
export class FreeTableCountComponent implements OnInit {

  constructor(
    private schemeService: SchemeService
  ) {
  }

  private _restaurantId = 1;

  numFreeTables = 0;

  get restaurantId() {
    return this._restaurantId;
  }

  @Input()
  set restaurantId(value: number | undefined) {
    if (!value) {
      return;
    }
    this._restaurantId = value;
  }


  ngOnInit(): void {
    this.schemeService.getCountFreeTables(this._restaurantId)
      .subscribe(num => {
        this.numFreeTables = num;
      })
  }

}
