'use client';

import { Popover } from "antd";
import Link from "next/link";

interface SeatProps{
  range: number,
  radius: {
    r0: number,
    r1: number
  }
  totalRows: number,
  dot_l: number
  rad: number
  pi: number
  id: string
}

export default function Seat({range, radius, totalRows, dot_l, rad, pi, id}: SeatProps) {
  const { r0, r1 } = radius;
  
  const arci = (radius: number) => {
    return (t: number) => {
      const p = t * pi - Math.PI * 0.5 - pi * 0.5;
      return [Math.cos(p) * radius, Math.sin(p) * radius];
    }
  }
  const test = arci(rad);

  const content = (
    <div>
      <p>Partido</p>
      <p>more info...</p>
    </div>
  );
  const firstLastName = 'andre-ventura';

  return (
    <Link href={`/deputado/${firstLastName}`}>
      <Popover content={content} title="Nome Deputado" trigger="hover">
        <circle
          transform={`translate(${test(range)})`}
          r={Math.min(dot_l * 0.5 - 1, (r1 - r0) / totalRows * 0.5 - 1)}
          className='dot'
          id={id}
          style={{'fill': '#e5e7eb'}}
        ></circle>
      </Popover>
    </Link>
  )
}
