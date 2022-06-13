import {Scheme} from "../scheme.model";
import {TableElement} from "./table-element.model";

export class SchemeElement {
  constructor(
    private scheme: Scheme,
    private ctx: CanvasRenderingContext2D
  ) {
    this.initTablesElements()
  }

  tableElements: TableElement[] = []

  initTablesElements() {
    const tables = this.scheme.tables;
    for (let i = 0; i < tables.length; i++) {
      let element: TableElement = new TableElement(tables[i], this.ctx);
      element.draw();
      this.tableElements.push(element);
    }
  }

  redraw() {
    this.tableElements.forEach(value => value.redraw());
  }



  findTable(x: number, y: number): TableElement {

    // @ts-ignore
    return this.tableElements.find(value => this.isInside(x, y, value));
  }

  isInside(x: number, y: number, table: TableElement): boolean {
    return (y >= table.y) && (y <= table.y + table.height) && (x >= table.x) && (x <= table.x + table.width)
  }
}
