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
      width: new FormControl(30, [Validators.required, Validators.min(30)]),
      height: new FormControl(30, [Validators.required, Validators.min(30)]),
      capacity: new FormControl(1, [Validators.required, Validators.min(1)])
    })
  }

  onSubmit() {
    if (this.tableForm.invalid) {
      this.errorHandling();
      return;
    }
    this.tableAdded.emit(this.tableForm.value);
  }

  errorHandling() {
    const controls = this.tableForm.controls;
    if (controls['width'].invalid) {
      this.alertifyService.error('Ширина введена не верно, минимальное значение 30');
    }
    if (controls['height'].invalid) {
      this.alertifyService.error('Высота введена не верно, минимальное значение 30');
    }
    if (controls['capacity'].invalid) {
      this.alertifyService.error('Вместимость введена не верно, минимальное значение 1');
    }
  }

}
