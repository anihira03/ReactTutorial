import React from "react";
import Square, { ISquare } from "./Square";

type BoardProps = {
  squares: ISquare[];
  onClick: (i: number) => void;
};

function Board(props: BoardProps) {
  return (
    <div className="board-row">
      {props.squares.map((v, i) => (
        <Square key={i} value={v} onClick={() => props.onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
