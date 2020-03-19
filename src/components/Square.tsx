import React from "react";

export type ISquare = "O" | "X" | null;

type SquareProps = {
  value: ISquare;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
