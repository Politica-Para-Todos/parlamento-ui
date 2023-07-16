'use client';
import Seat from "./Seat"

interface RowProps{
  seats: number,
  rad: number,
  index: number
  radius: {
    r0: number,
    r1: number
  },
  totalRows: number,
  pi: number,
  dot_l: number
}

export default function Row({rad, radius, totalRows, pi, seats, dot_l}: RowProps) {
  const range = (from: number, to: number, step: number): number[] =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
  const seatsRange = range(0, 1.000001, 1 / seats);
  
  return (
    <g className='row'>
      {seatsRange.map((id) => (
        <Seat
          key={id}
          id={id}
          radius={radius}
          totalRows={totalRows}
          rad={rad}
          pi={pi}
          dot_l={dot_l}
        ></Seat>
      ))}
    </g>
  )
}
