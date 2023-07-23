'use client';

import { Deputy } from "../../deputado/dto";

interface CircleProps {
  id: string,
  totalRows: number,
  pi: number,
  range: number,
  rad: number,
  radius: {
    r0: number,
    r1: number
  },
  dot_l: number,
  deputy: Deputy
}

export default function Circle({id, totalRows, pi, range, rad, radius, dot_l, deputy}: CircleProps) {
  const { r0, r1 } = radius;
  
  return (
    <circle
      transform={`translate(${arc(rad, range, pi)})`}
      r={Math.min(dot_l * 0.5 - 1, (r1 - r0) / totalRows * 0.5 - 1)}
      className='dot'
      id={id}
      style={{'fill': `${deputy ? deputy.parliamentaryGroup.hexaColor : '#e5e7eb'}`}} //'#e5e7eb'
    ></circle>
  )
}

const arc = (rad: number, t: number, pi: number) => {
  const p = t * pi - Math.PI * 0.5 - pi * 0.5;
  return [Math.cos(p) * rad, Math.sin(p) * rad]
}
