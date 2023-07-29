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
  hemicycleRows: number,
  dot_l: number,
  rad: number,
  id: string,
  deputy: Deputy
}

export default function Seat(props: SeatProps) {
  const { deputy } = props;
  const deputyFirstLastName = deputy ? deputy.firstLastName : 'no-deputy';

  return (
    <Popover content={popOverContent(deputy)} title={deputy ? deputy.firstLastName : 'Lugar Vago'} trigger="hover">
      <Link href={`/deputado/${deputyFirstLastName}`}>
        <Circle {...props} />
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
