import React from "react";
import Square, { ISquare } from "./Square";
import styled from "styled-components";

type BoardProps = {
  squares: ISquare[];
  onClick: (i: number) => void;
};

function Board(props: BoardProps) {
  return (
    <Container>
      {props.squares.map((v, i) => (
        <Square key={i} value={v} onClick={() => props.onClick(i)} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 102px;
`;

export default Board;
