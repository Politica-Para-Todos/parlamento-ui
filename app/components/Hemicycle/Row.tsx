'use client';
import Seat from "./Seat"

interface RowProps{
  seats: number,
  rad: number,
  rowIndex: number
  radius: {
    r0: number,
    r1: number
  },
  totalRows: number,
  pi: number,
  dot_l: number
}

export default function Row({rad, radius, totalRows, pi, seats, dot_l, rowIndex}: RowProps) {
  const range = (from: number, to: number, step: number): number[] =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
  const seatsRange = range(0, 1.000001, 1 / seats);
  
  return (
    <g className='row'>
      {seatsRange.map((range, index) => (
        <Seat
          key={range}
          range={range}
          radius={radius}
          totalRows={totalRows}
          rad={rad}
          pi={pi}
          dot_l={dot_l}
          id={`${rowIndex}-${index}`}
        ></Seat>
      ))}
    </g>
  )
}
