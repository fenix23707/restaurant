import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertifyService, Table} from "../../../core";

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.scss']
})
export class TableAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private alertifyService: AlertifyService
  ) { }

  tableForm!: FormGroup
  @Output() tableAdded = new EventEmitter<Table>();

  ngOnInit(): void {
    this.tableForm = this.fb.group({
      width: new FormControl(20, [Validators.required, Validators.min(10)]),
      height: new FormControl(20, [Validators.required, Validators.min(10)]),
      capacity: new FormControl(1, [Validators.required, Validators.min(1)])
    })
  }

  onSubmit() {
    if (this.tableForm.invalid) {
      this.alertifyService.error('Данные введены не верно');
      return;
    }
    this.tableAdded.emit(this.tableForm.value);
  }

}
