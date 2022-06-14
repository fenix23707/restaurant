import {Table} from "../table.model";

export class TableElement {
  readonly canvasColor = "white";

  constructor(
    public table: Table,
    private ctx: CanvasRenderingContext2D
  ) {
  }


  draw(color: string = 'black') {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.table.x, this.table.y, this.table.width, this.table.height);
    this.ctx.restore();
  }

  redraw() {
    this.clear();
    this.draw();
  }

  moveTo(x: number, y: number) {
    this.clear();
    this.table.x = x;
    this.table.y = y;
    this.draw();
  }

  changeColor(color: string) {
    this.clear();
    this.draw(color)
  }

  clear() {
    this.ctx.save();
    this.ctx.fillStyle = this.canvasColor;
    this.ctx.clearRect(this.table.x - 2, this.table.y - 2, this.table.width + 4, this.table.height + 4);
    this.ctx.fillRect(this.table.x - 2, this.table.y - 2, this.table.width + 4, this.table.height + 4);
    this.ctx.restore();
  }

  get x(): number {
    return this.table.x
  }

  get y(): number {
    return this.table.y
  }

  get width(): number {
    return this.table.width
  }

  get height(): number {
    return this.table.height
  }
}
