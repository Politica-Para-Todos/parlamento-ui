'use client';

import { Deputy } from "../../deputado/dto";

interface CircleProps {
  id: string,
  hemicycleRows: number,
  range: number,
  rad: number,
  radius: {
    r0: number,
    r1: number
  },
  dot_l: number,
  deputy: Deputy
}

export default function Circle({id, hemicycleRows, range, rad, radius, dot_l, deputy}: CircleProps) {
  return (
    <circle
      transform={`translate(${arc(rad, range)})`}
      r={Math.min(dot_l * 0.5 - 1, (radius.r1 - radius.r0) / hemicycleRows * 0.5 - 1)}
      className='dot'
      id={id}
      style={{'fill': `${deputy ? deputy.parliamentaryGroup.hexaColor : '#e5e7eb'}`}}
    ></circle>
  )
}

const arc = (rad: number, t: number) => {
  const pi = Math.PI * 1;
  const p = t * pi - Math.PI * 0.5 - pi * 0.5;
  return [Math.cos(p) * rad, Math.sin(p) * rad]
}
