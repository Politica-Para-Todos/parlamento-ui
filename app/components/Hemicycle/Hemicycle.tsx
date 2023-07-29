'use client';

import { Deputy } from "../../deputado/dto";
import Row from "../Row/Row"

interface HemicycleProps {
  deputies: Deputy[]
  width?: number,
  seats: number
  rows: number
}

export default function Hemicycle({width = 600, deputies, seats, rows}: HemicycleProps) {
  const pi = Math.PI * 1;
  const height = width * 0.60;
  const circle = Math.min(width, height * 1.5);
  const radius0 = circle * 0.22;
  const radius1 = circle * 0.58;
  const positionX = width * 0.5;
  const positionY = circle * 0.55;
  const rowsIndex = Array.from(Array(rows).keys());
  const rowsRadius = rowsIndex.map(row => radius0 + row * ((radius1 - radius0) / rows));
  const total_l = rowsRadius
    .map(rowRadius => pi * rowRadius)
    .reduce((previous, current) => previous + current, 0);
  
  let dots_total = 6;

  let mutableDeputies = [...deputies];

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
              rad={rad}
              rowIndex={index}
              radius={{r0: radius0, r1: radius1}}
              dot_l={total_l / seats}
              hemicycleRows={rows}
              deputies={mutableDeputies}
            ></Row>
          )})}
      </g>
    </svg>
  );
}

// const rowDeputies = (currentRow: number, seats: number, remainingDeputies: Deputy[], parties: PartyAcronym[]) => {
//   if (currentRow === 0) {
//    return distributeParliamentaryGroupLeaders(seats, remainingDeputies);
//   }
//   // return distributeParliamentaryDeputies(seats, remainingDeputies, parties);
// }

// const distributeParliamentaryGroupLeaders = (seats: number, remainingDeputies: Deputy[]) => {
//   let remainingSeats = seats;
//   const deputies: Deputy[] = [];

//   const leaders = remainingDeputies.filter(deputy => deputy.position.description === 'lider_parlamentar');
  
//   if (leaders.length > seats / 2) { // bigger than the half of the row (left | right)
//     throw Error('Too many deputy leaders.');
//   }
//   deputies.concat(leaders);
//   remainingSeats -= leaders.length;

//   const nonLeaders = remainingDeputies.filter(deputy => deputy.position.description !== 'lider_parlamentar');
  
//   for (const index in nonLeaders) {
//     if (remainingSeats === 0) {
//       break;
//     }

//     // const currentParty = parties[index];
//     // const currentPartyDeputy = randomDeputy(nonLeaders, currentParty as PartyAcronym);

//     if (!currentPartyDeputy) {
//       continue;
//     }
//     deputies.push(nonLeaders[index]);
//     remainingSeats--;
//   };
//   return deputies;
// }

// const distributeParliamentaryDeputies = (seats: number, remainingDeputies: Deputy[], parties: PartyAcronym[], rows: number): Deputy[] => {
//   let remainingSeats = seats;
//   const rowDeputies: Deputy[] = [];

//   if (remainingDeputies.length > remainingSeats) {
//     throw Error(`Too many deputies - ${remainingDeputies.length} to the remaining seats - ${remainingSeats}.`);
//   }

// remainingRowSeats = 0;
// if, is not the last party ?
// how many parties left ?
// if, each party's total seats > 1 ?
// remainingRowSeats = SEAT_DISTRIBUTION * remaining parties;
// if, party's total seats more than all rows ?
// how many parties ?
// how many repetitions ?
// remainingRowSeats += repetitions
// partieSeats >= remainingRowSeats => jump to next row
//   for (const party of parties) {
//     if (remainingSeats === 0) {
//       break;
//     }
    
//     const partyDeputies = remainingDeputies.filter(deputy => deputy.parliamentaryGroup.acronym === party);
//     const deputies = selectRowDeputies(partyDeputies, remainingDeputies, remainingSeats);

    
//     if (deputies.length === 1) {
//       const deputyIndex = remainingDeputies.indexOf(deputies[0]);
//       remainingDeputies.splice(deputyIndex, 1);
//     }
    
//     remainingSeats -= deputies.length;
//     rowDeputies.concat(deputies);
//   }
//   return rowDeputies;
// }

// const selectRowDeputies = (partyDeputies: Deputy[], remainingDeputies: Deputy[], remainingSeats: number): Deputy[] => {
//   const totalPartyDeputies = partyDeputies.length;

//   if (totalPartyDeputies === 0) {
//     return [];
//   }
//   else if (totalPartyDeputies === 1 && remainingSeats >= totalPartyDeputies) {
//     return partyDeputies;
//   }
//   else if (totalPartyDeputies === 2 && remainingSeats >= totalPartyDeputies) {
//     const deputy1 = randomDeputy(partyDeputies);
//     const deputy2 = randomDeputy(partyDeputies.filter(deputy => JSON.stringify(deputy) !== JSON.stringify(deputy1)));

//     return [deputy1, deputy2];
//   }
//   else if (totalPartyDeputies > 2 && remainingSeats >= totalPartyDeputies) {
//     let seats = remainingSeats;

//     const deputy1 = randomDeputy(partyDeputies);
//     const deputy2 = randomDeputy(partyDeputies.filter(deputy => JSON.stringify(deputy) !== JSON.stringify(deputy1)));

//     seats -= 2;

//     // const passRows = ()
//   }
//   else {
//     throw new Error();
//   }
// }
