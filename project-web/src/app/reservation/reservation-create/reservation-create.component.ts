import {Component, OnInit} from '@angular/core';
import {AlertifyService, Reservation, Scheme, SchemeService, Table, TableElement} from "../../core";
import {map} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../core/services/reservation.service";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {
  }

  scheme!: Scheme
  reservationForm!: FormGroup;
  table!: Table;
  capacities: number[] = []
  start = new Date();
  end = new Date(Date.now() + 2 * (60 * 60 * 1000));


  ngOnInit(): void {
    this.route.data.pipe(map(value => value['scheme']))
      .subscribe(scheme => {
        this.scheme = scheme;
      })

    this.initForm();
  }

  initForm() {
    this.reservationForm = this.fb.group({
      start: new FormControl(this.toDateString(this.start), [Validators.required]),
      end: new FormControl(this.toDateString(this.end), [Validators.required]),
      capacity: new FormControl('', [Validators.required, Validators.min(1)])
    })
  }

  onSubmit() {
    if (this.reservationForm.invalid) {
      console.log(this.reservationForm)
      this.alertifyService.error('Данные введены не верно');
      return;
    }
    const data = this.reservationForm.value;
    const reserve: Reservation = {
      capacity: data.capacity,
      datetime_begin:data.start,
      datetime_end: data.end,
    // @ts-ignore
      table_id: this.table.id
    }
    console.log(reserve)
    this.reservationService.reserve(reserve)
      .subscribe(value => {
        this.alertifyService.success('Стол забронирован')
        this.router.navigateByUrl('/restaurants/' + this.scheme.restaurant_id);

      })


  }

  onTableChosen(table: TableElement) {
    this.table = table.table;
    this.capacities = Array.from({length: this.table.capacity}, (_, i) => i + 1)
    this.reservationForm.controls['capacity'].setValue(this.table.capacity);
  }

  private toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-'
        + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
        + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0, 5);
  }
}
