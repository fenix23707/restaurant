import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Scheme, SchemeElement, Table, TableElement} from "../../core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-scheme-add',
  templateUrl: './scheme-add.component.html',
  styleUrls: ['./scheme-add.component.scss']
})
export class SchemeAddComponent implements AfterViewInit, OnInit {

  constructor(
    private fb: FormBuilder
  ) {
  }

  @ViewChild('schemecanvas') canvas!: ElementRef<HTMLCanvasElement>;
  private _ctx!: CanvasRenderingContext2D;

  private _scheme: Scheme = {height: 300, width: 800, tables: []};
  schemeElement!: SchemeElement;
  currentTable: TableElement | undefined

  sizeForm!: FormGroup

  ngOnInit(): void {
    this.sizeForm = this.fb.group({
      width: new FormControl(this._scheme.width),
      height: new FormControl(this._scheme.height)
    })
  }

  onInput(event: Event) {
    this._scheme.width = this.sizeForm.value['width'];
    this._scheme.height = this.sizeForm.value['height'];
    this.initializeCanvasWidthAndHeight()
    this.fillBackGround();
    this.schemeElement.redraw()
  }

  onMouseDown(event: MouseEvent) {
    const position = this.getMousePos(event);
    this.currentTable = this.schemeElement.findTable(position.x, position.y);

  }


  onMouseMove(event: MouseEvent) {
    if (this.currentTable) {
      const position = this.getMousePos(event);
      this.currentTable.moveTo(position.x, position.y);
    }

  }


  onMouseUp(event: MouseEvent) {
    this.currentTable = undefined;
  }


  onDbClick(event: MouseEvent) {
    const position = this.getMousePos(event);
    this.schemeElement.removeTable(position.x, position.y);
  }


  getMousePos(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  onTableAdded(table: Table) {
    table.x = 0;
    table.y = 0;
    this.schemeElement.addTable(table);
  }

  ngAfterViewInit(): void {
    this.setCanvasRenderingContext2D();
    this.initializeCanvasWidthAndHeight();
    this.fillBackGround();
    this.schemeElement = new SchemeElement(this._scheme, this._ctx)
  }

  private setCanvasRenderingContext2D(): void {
    // @ts-ignore
    this._ctx = this.canvas.nativeElement.getContext('2d');
  }

  private initializeCanvasWidthAndHeight(width: number = this._scheme.width, height: number = this._scheme.height) {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    canvasElement.height = height;
    canvasElement.width = width;
  }

  private fillBackGround() {
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(0, 0, this._scheme.width, this._scheme.height);
    this._ctx.restore()
  }

}
