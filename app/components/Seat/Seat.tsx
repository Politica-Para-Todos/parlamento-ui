'use client';

import { Popover } from "antd";
import Link from "next/link";
import Circle from "../Circle/Circle";
import { Deputy } from "../../deputado/dto";

interface SeatProps{
  range: number,
  radius: {
    r0: number,
    r1: number
  }
  totalRows: number,
  dot_l: number,
  rad: number,
  pi: number,
  id: string,
  deputy: Deputy
}

export default function Seat({range, radius, totalRows, dot_l, rad, pi, id, deputy}: SeatProps) {
  
  const deputyFirstLastName = deputy ? deputy.firstLastName : 'no-deputy';

  return (
    <Popover content={popOverContent(deputy)} title={deputy ? deputy.firstLastName : 'Lugar Vago'} trigger="hover">
      <Link href={`/deputado/${deputyFirstLastName}`}>
        <Circle
          key={id}
          id={id}
          totalRows={totalRows}
          pi={pi}
          range={range}
          rad={rad}
          radius={radius}
          dot_l={dot_l}
          deputy={deputy}
        />
      </Link>
    </Popover>
  )
}

const popOverContent = (deputy: Deputy): JSX.Element => {
  return (
    <div>
      <p>{deputy ? deputy.parliamentaryGroup.acronym : 'Sem partido'}</p>
      <p>{deputy ? deputy.situation[0].description : 'Sem deputado'}</p>
    </div>
  );
}
