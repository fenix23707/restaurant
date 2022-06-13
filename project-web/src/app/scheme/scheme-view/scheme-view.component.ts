import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Scheme, SchemeElement, SchemeService, TableElement} from "../../core";

@Component({
  selector: 'app-scheme-view',
  templateUrl: './scheme-view.component.html',
  styleUrls: ['./scheme-view.component.scss']
})
export class SchemeViewComponent implements OnInit {

  constructor(
    private schemeService: SchemeService
  ) {  }

  @ViewChild('schemecanvas')
  canvas!: ElementRef<HTMLCanvasElement>;
  private _ctx!: CanvasRenderingContext2D;

  @Output()
  tableChosen = new EventEmitter<TableElement>();

  private _restaurantId = 1;
  scheme: Scheme = {height: 1000, width: 1000, restaurant_id: this._restaurantId, tables: []};
  schemeElement!: SchemeElement;

  ngOnInit(): void {
    this.schemeService.getSchemeByRestaurantId(this._restaurantId)
      .subscribe(value => this.subscribe(value));
  }

  subscribe(value: any) {
    if (value) {
      this.scheme = value;
    }
    this.setCanvasRenderingContext2D();
    this.initializeCanvasWithAndHeight();
    this.fillBackGround();
    this.schemeElement = new SchemeElement(this.scheme, this._ctx);
  }

  onClick(event: MouseEvent) {
    const position = this.getMousePos(event);
    const table = this.schemeElement.findTable(position.x, position.y);
    if (table) {
      this.schemeElement.redraw();
      table.changeColor('blue')
      this.tableChosen.emit(table);
    }
  }

  getMousePos(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  private setCanvasRenderingContext2D(): void {
    // @ts-ignore
    this._ctx = this.canvas.nativeElement.getContext('2d');
  }

  private initializeCanvasWithAndHeight() {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    canvasElement.height = this.scheme.height;
    canvasElement.width = this.scheme.width;
  }

  private fillBackGround() {
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(0, 0, this.scheme.width, this.scheme.height);
    this._ctx.restore()
  }

  get restaurantId(): number {
    return this._restaurantId;
  }

  @Input()
  set restaurantId(value: number) {
    this._restaurantId = value;
  }

}
