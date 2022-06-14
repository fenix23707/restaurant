import {Scheme} from "../scheme.model";
import {TableElement} from "./table-element.model";
import {Table} from "../table.model";

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

  addTable(table: Table) {
    let tableElement = new TableElement(table, this.ctx);
    tableElement.draw()
    this.tableElements.push(tableElement)
  }

  removeTable(x: number, y: number) {
    const table = this.findTable(x, y);
    if (table) {
      table.clear();
      this.tableElements = this.tableElements.filter(obj => obj !== table);
    }
  }

  findTable(x: number, y: number): TableElement {

    // @ts-ignore
    return this.tableElements.find(value => this.isInside(x, y, value));
  }

  isInside(x: number, y: number, table: TableElement): boolean {
    return (y >= table.y) && (y <= table.y + table.height) && (x >= table.x) && (x <= table.x + table.width)
  }
}
