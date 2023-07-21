'use client';
import Row from "./Row"

interface HemicycleProps {
  width: number
}

export default function Hemicycle({width}: HemicycleProps) {
  const seats = 230;
  const rows = 6;
  const height = width * 0.60;
  const circle = Math.min(width, height * 1.5);
  const radius0 = circle * 0.22;
  const radius1 = circle * 0.58;
  const positionX = width * 0.5;
  const positionY = circle * 0.55;
  const rowsRange = Array.from(Array(rows).keys());
  const rowsRadius = rowsRange.map(row => radius0 + row * ((radius1 - radius0) / rows));
  const pi = Math.PI * 1;
  const total_l = rowsRadius.map(row => pi * row).reduce((a, c) => a + c, 0);
  
  let dots_total = 6;

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${positionX},${positionY})`}>
        {rowsRadius.map((rad, index) => {
          const rowSeats = index === rowsRadius.length - 1 ? seats - dots_total : Math.round(pi * rad / total_l * seats);
          dots_total += rowSeats;

          return (
            <Row
              key={index}
              seats={rowSeats}
              pi={pi}
              rad={rad}
              rowIndex={index}
              radius={{r0: radius0, r1: radius1}}
              dot_l={total_l / seats}
              totalRows={rows}
            ></Row>
          )})}
      </g>
    </svg>
  );
}
