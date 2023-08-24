export interface ParliamentaryGroup {
  id: number,
  acronym: PartyAcronym,
  name: string,
  startDate: string,
  endDate: string | null,
  hexaColor: PartyColor
}

export enum PartyAcronym {
  PS = 'PS',
  PSD = 'PSD',
  CH = 'CH',
  IL = 'IL',
  BE = 'BE',
  PCP = 'PCP',
  PAN = 'PAN',
  L = 'L'
}

export enum PartyColor {
  PS = '#EE4D9B',
  PSD = '#FF6500',
  CH = '#242454',
  IL = '#00AEEF',
  BE = '#0F0507', // even though black is an official color for the party, couldn't find the exact black
  PCP = '#B20000',
  PAN = '#0B566A',
  L = '#C4D600'
}
