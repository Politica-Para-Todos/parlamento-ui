import InitiaitiveTable from "../Tables/InitiativeTable";
import { Initiative } from "./dto";

async function getInitiatives() {
  return await fetch('https://portuguese-politics.herokuapp.com/parliament/initiatives?legislature=XV&event_phase=Vota%C3%A7%C3%A3o%20na%20generalidade&limit=20&offset=0')
  .then(response => {
    if (!response.ok) {
      throw new Error('API request has failed');
    }
    return response.json();
  })
}

export default async function FetchInitiatives() {
  const fetchedData = await getInitiatives();
  const initiatives = fetchedData['initiativas'] as Initiative[];

  return (
    <div>
      <InitiaitiveTable data={initiatives}></InitiaitiveTable>
    </div>
  );
}
