import { ParliamentaryGroup } from "../partido/dto"

export interface Deputy {
  id: number,
  firstLastName: string,
  fullName: string,
  circle: string,
  parliamentaryGroup: ParliamentaryGroup,
  situation: DeputySituation[],
  position: DeputyPosition | null,
  legislature: string
}

interface DeputySituation {
  description: string,
  startDate: string,
  endDate: string | null
}

interface DeputyPosition {
  id: string,
  description: string,
  startDate: string,
  endDate: string | null
}
