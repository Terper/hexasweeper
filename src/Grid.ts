import { Tile } from "./Tile";
import { isEven } from "./utils";

export class Grid {
  radius: number;
  rowCounts: number[] = [];
  grid: Tile[][] = [];
  constructor(radius: number) {
    this.radius = radius;
    this.generateGrid();
  }
  generateGrid = () => {
    for (let i = this.radius; i <= 2 * this.radius - 1; i++) {
      this.rowCounts.push(i);
    }
    for (let i = 2 * this.radius - 2; i >= this.radius; i--) {
      this.rowCounts.push(i);
    }

    for (let i = 0; i < this.rowCounts.length; i++) {
      const rowCount = this.rowCounts[i];
      const col: Tile[] = [];
      let padding: number;

      if (isEven(this.radius)) {
        padding = (this.rowCounts.length - rowCount) / 2;
      } else {
        padding = Math.floor((this.rowCounts.length - rowCount) / 2);
      }
      for (let j = 0; j < rowCount; j++) {
        col.push(new Tile(j, i));
      }
      this.grid.push(col);
    }
  };
}
