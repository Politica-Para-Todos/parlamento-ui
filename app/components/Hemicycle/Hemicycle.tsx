'use client';

import { Deputy } from "../../deputado/dto";
import { HemicycleSvg } from "../../hemicycle/hemicycle_svg";
import { PartyAcronym } from "../../partido/dto";

interface HemicycleProps {
  deputies: Deputy[]
  width?: number,
  seats: number
  rows: number
}

// Might be useful...
interface PartyAndDeputies {
  [partyAcronym: string]: Deputy[] 
}

export default function Hemicycle(props: HemicycleProps) {
  const { width } = props;
  const hemicycleProps = {
    width: !width || width < 600 ? 600 : width,
    deputies: props.deputies,
    rows: props.rows,
    seats: props.seats
  };

  return (
    <HemicycleSvg {...hemicycleProps} />
  );
}

const partiesRepresented = (deputies: Deputy[]): PartyAcronym[] => {
  return deputies
  .map(deputy => deputy.parliamentaryGroup.acronym)
  .filter((acronym, index, self) => index === self.indexOf(acronym));
}

const buildPartyAndDeputies = (deputies: Deputy[]): PartyAndDeputies => {
  const partyAcronyms = partiesRepresented(deputies);

  return partyAcronyms.reduce((acc: {[key: string]: Deputy[]}, current) => {
    acc[current] = deputies.filter(deputy => deputy.parliamentaryGroup.acronym === current);
    return acc;
  }, {})
}
