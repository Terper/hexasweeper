import { Grid } from "./Grid";
import Hexagon from "./Hexagon";
import { isEven } from "./utils";

type Props = {};

const Game = (props: Props) => {
  const radius = 4;
  const size = 60;

  const grid = new Grid(radius);

  console.log(grid);

  return (
    <div className="flex flex-col items-center">
      {grid.grid.map((col, colIndex) => (
        <div className="flex flex-row" key={colIndex}>
          {col.map((row, rowIndex) => (
            <Hexagon
              size={size}
              isEven={isEven(colIndex)}
              key={rowIndex}
            ></Hexagon>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;
