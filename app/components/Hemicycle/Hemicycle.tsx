'use client';
import { Deputy } from "../../deputado/dto";
import { PartyAcronym } from "../../partido/dto";
import Row from "./Row"

interface HemicycleProps {
  width: number,
  deputies: Deputy[]
}

export default function Hemicycle({width, deputies}: HemicycleProps) {
  const seats = 230;
  const rows = 6;
  const height = width * 0.60;
  const circle = Math.min(width, height * 1.5);
  const radius0 = circle * 0.22;
  const radius1 = circle * 0.58;
  const positionX = width * 0.5;
  const positionY = circle * 0.55;
  const rowsRange = Array.from(Array(rows).keys());
  const rowsRadius = rowsRange.map(row => radius0 + row * ((radius1 - radius0) / rows));
  const pi = Math.PI * 1;
  const total_l = rowsRadius.map(row => pi * row).reduce((a, c) => a + c, 0);
  
  let dots_total = 6;

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${positionX},${positionY})`}>
        {rowsRadius.map((rad, index) => {
          const rowSeats = index === rowsRadius.length - 1 ? seats - dots_total : Math.round(pi * rad / total_l * seats);
          dots_total += rowSeats;

          return (
            <Row
              key={index}
              seats={rowSeats}
              pi={pi}
              rad={rad}
              rowIndex={index}
              radius={{r0: radius0, r1: radius1}}
              dot_l={total_l / seats}
              totalRows={rows}
              deputies={deputies}
            ></Row>
          )})}
      </g>
    </svg>
  );
}

const distributeDeputySeats = (row: number, seats: number, remainingDeputies: Deputy[]) => {
  return null;
}

const rowDeputies = (currentRow: number, seats: number, remainingDeputies: Deputy[]) => {
  if (currentRow === 0) {
    const leaders = remainingDeputies.filter(deputy => deputy.position.description === 'lider_parlamentar');
    
    remainingDeputies.forEach((deputy, index) => {
      if (deputy.position.description === 'lider_parlamentar') {
        remainingDeputies.splice(index, 1);
      }
    });

    if (leaders.length > seats || leaders.length > seats / 2) { // bigger than all seats or bigger than the half of the row (left | right)
      throw Error('Too many deputy leaders.');
    }
    let remainingSeats = seats - leaders.length;

    const parties = ['BE', 'PCP'];

    for (const party of parties) {
      if (remainingSeats === 0) {
        break;
      }
      const partyDeputy = randomDeputy(remainingDeputies, party as PartyAcronym);
      
      if (!partyDeputy) {
        continue;
      }
      leaders.push(partyDeputy);
      const remain = remainingDeputies.slice(remainingDeputies.indexOf(partyDeputy), 1);
      remainingSeats--;
    }
    return remainingDeputies.filter(deputy => deputy.position.description !== 'lider')
  }
}

const randomDeputy =(deputies: Deputy[], party: PartyAcronym): Deputy | null => {
  const partyDeputies = deputies.filter(deputy => deputy.parliamentaryGroup.acronym === party);
  const size = partyDeputies.length;
  
  if (size === 0) {
    return null;
  }
  
  return deputies
    .filter(deputy => deputy.parliamentaryGroup.acronym === party)
    .sort(() => randomIndex(size))
    [randomIndex(size)];
}

const randomIndex = (max: number) => {
  if (max <= 0) {
    throw Error(`${max} is an invalid input. It must be >= 1.`)
  }
  return Math.floor(Math.random() * max)
}
