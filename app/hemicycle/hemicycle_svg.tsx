'use client';

import HemicycleRow from "../components/Row/Row";
import { Deputy } from "../deputado/dto";

interface HemicycleSvgProps {
  width: number,
  rows: number,
  seats: number,
  deputies: Deputy[]
}

export function HemicycleSvg(props: HemicycleSvgProps) {
  const { width } = props;
  const height = width * 0.60;

  const hemicycleSvgProps = {
    height, 
    ...props
  }

  return (
    <svg height={height} width={width}>
      <HemicycleContainer {...hemicycleSvgProps}/>
    </svg>
  )
}

interface HemicycleContainerProps {
  width: number,
  height: number,
  rows: number,
  seats: number,
  deputies: Deputy[]
}

export function HemicycleContainer({width, height, rows, seats, deputies}: HemicycleContainerProps) {
  const pi = Math.PI * 1;
  const circle = Math.min(width, height * 1.5);
  const radius0 = circle * 0.22;
  const radius1 = circle * 0.58;
  const positionX = width * 0.5;
  const positionY = circle * 0.55;
  const rowsIndex = Array.from(Array(rows).keys());
  const rowsRadius = rowsIndex.map(row => radius0 + row * ((radius1 - radius0) / rows));
  const total_l = rowsRadius
    .map(rowRadius => pi * rowRadius)
    .reduce((previous, current) => previous + current, 0);
  
  let dots_total = 6;

  return (
    <g transform={`translate(${positionX},${positionY})`}>
      {rowsRadius.map((rad, index) => {
        const rowSeats = index === rowsRadius.length - 1 ? seats - dots_total : Math.round(pi * rad / total_l * seats);
        dots_total += rowSeats;

        // deputies...
        const deputiesForCurrentRow = rowDeputies(deputies, seats);

        return (
          <HemicycleRow
            key={index}
            seats={rowSeats}
            rad={rad}
            rowIndex={index}
            radius={{r0: radius0, r1: radius1}}
            dot_l={total_l / seats}
            hemicycleRows={rows}
            deputies={deputiesForCurrentRow}
          ></HemicycleRow>
        )
      })}
    </g>
  )
}

const randomIndex = (maxRange: number): number => Math.floor(Math.random() * maxRange + 1); 

const randomDeputy = (deputies: Deputy[], randomIndex: number): Deputy => {
  return deputies[randomIndex];
}

const rowDeputies = (deputies: Deputy[], rowSeats: number) => Array.from({length: rowSeats}, () => randomDeputy(deputies, randomIndex(230)));
