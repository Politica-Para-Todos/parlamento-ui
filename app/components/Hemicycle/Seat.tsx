'use client';
interface SeatProps{
  id: number,
  radius: {
    r0: number,
    r1: number
  }
  totalRows: number,
  dot_l: number
  rad: number
  pi: number
}

export default function Seat({id, radius, totalRows, dot_l, rad, pi: pi}: SeatProps) {
  const { r0, r1 } = radius;
  
  const arci = (radius: number) => {
    return (t: number) => {
      const p = t * pi - Math.PI * 0.5 - pi * 0.5
      return [Math.cos(p) * radius, Math.sin(p) * radius]
    }
  }
  const test = arci(rad);

  return (
    <circle
      transform={`translate(${test(id)})`}
      r={Math.min(dot_l * 0.5 - 1, (r1 - r0) / totalRows * 0.5 - 1)}
      className='dot'
      id={id.toString()}
    ></circle>
  )
}
