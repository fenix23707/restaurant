import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Scheme, SchemeElement, SchemeService, TableElement} from "../../core";

@Component({
  selector: 'app-scheme-view',
  templateUrl: './scheme-view.component.html',
  styleUrls: ['./scheme-view.component.scss']
})
export class SchemeViewComponent implements AfterViewInit {

  constructor() {
  }

  @ViewChild('schemecanvas') canvas!: ElementRef<HTMLCanvasElement>;
  private _ctx!: CanvasRenderingContext2D;

  @Output()
  tableChosen = new EventEmitter<TableElement>();

  private _scheme: Scheme = {height: 1000, width: 1000, tables: []};
  schemeElement!: SchemeElement;


  ngAfterViewInit(): void {
    this.setCanvasRenderingContext2D();
    this.initializeCanvasWithAndHeight();
    this.fillBackGround();
    this.schemeElement = new SchemeElement(this._scheme, this._ctx)
  }




  onClick(event: MouseEvent) {
    const position = this.getMousePos(event);
    const table = this.schemeElement.findTable(position.x, position.y);
    if (table) {
      this.schemeElement.redraw(); //TODO: delete if not need
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
    canvasElement.height = this._scheme.height;
    canvasElement.width = this._scheme.width;
  }

  private fillBackGround() {
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(0, 0, this._scheme.width, this._scheme.height);
    this._ctx.restore()
  }

  @Input()
  set scheme(value: Scheme) {
    this._scheme = value;
  }
}
