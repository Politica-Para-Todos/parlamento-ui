import InitiaitiveTable from "../Tables/InitiativeTable";

export interface Initiative {
  iniciativa_id: string;
  iniciativa_fase: string;
  iniciativa_titulo: string;
  iniciativa_url: string;
  iniciativa_url_res: string;
  iniciativa_autor: string;
  iniciativa_autor_deputados_nomes: string;
  iniciativa_data: string;
  iniciativa_tipo: string;
  iniciativa_votacao_res: string;
  iniciativa_votacao_il: string;
  iniciativa_votacao_psd: string;
  iniciativa_votacao_be: string;
  iniciativa_votacao_pan: string;
  iniciativa_votacao_l: string;
  iniciativa_votacao_pcp: string;
  iniciativa_votacao_ps: string;
  iniciativa_votacao_ch: string;
}

async function getInitiatives(params: any) {
  return await fetch('https://portuguese-politics.herokuapp.com/parliament/initiatives?legislature=XV&event_phase=Vota%C3%A7%C3%A3o%20na%20generalidade&limit=20&offset=0')
  .then(response => {
    if (!response.ok) {
      throw new Error('API request has failed');
    }
    return response.json();
  })
}

export default async function FetchInitiatives() {
  const fetchedData = await getInitiatives(null);
  const initiatives = fetchedData['initiativas'] as Initiative[];

  return (
    <div>
      <InitiaitiveTable data={initiatives}></InitiaitiveTable>
    </div>
  );
}
