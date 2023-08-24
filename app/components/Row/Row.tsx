'use client';
import { Deputy } from "../../deputado/dto";
import HemicycleSeat from "../Seat/Seat"

interface RowProps{
  seats: number,
  rad: number,
  rowIndex: number,
  radius: {
    r0: number,
    r1: number
  },
  hemicycleRows: number,
  dot_l: number,
  deputies: Deputy[]
}

export default function HemicycleRow({seats, rowIndex, radius, hemicycleRows, rad, dot_l, deputies}: RowProps) {
  const seatsRange = range(0, 1.000001, 1 / seats);
  
  return (
    <g className='row'>
      {seatsRange.map((seatRange, index) => (
        <HemicycleSeat
          key={seatRange}
          id={`${rowIndex}-${index}`}
          range={seatRange}
          radius={radius}
          hemicycleRows={hemicycleRows}
          rad={rad}
          dot_l={dot_l}
          deputy={deputies[index]}
        ></HemicycleSeat>
      ))}
    </g>
  )
}

const range = (from: number, to: number, step: number): number[] =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
