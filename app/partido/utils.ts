import { PartyAcronym, PartyColor } from "./dto";

export function mapToPartyColor(acronym: PartyAcronym): PartyColor {
  switch(acronym) {
    case PartyAcronym.PS:
      return PartyColor.PS;
    case PartyAcronym.PSD:
      return PartyColor.PSD;
    case PartyAcronym.CH:
      return PartyColor.CH;
    case PartyAcronym.IL:
      return PartyColor.IL;
    case PartyAcronym.BE:
      return PartyColor.BE;
    case PartyAcronym.PCP:
      return PartyColor.PCP;
    case PartyAcronym.PAN:
      return PartyColor.PAN;
    case PartyAcronym.L:
      return PartyColor.L;
    default:
      throw Error(`${acronym} is not a valid party acronym.`);
  }
}
