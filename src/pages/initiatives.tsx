import { Layout } from "antd";
import LayoutHeader from "components/Headers/LayoutHeader";

export default function Home() {
  return (
    <div>
      <LayoutHeader />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://portuguese-politics.herokuapp.com/parliament/initiatives?legislature=XV&event_phase=Vota%C3%A7%C3%A3o%20na%20generalidade&limit=20&offset=0"
  );
  if (response.status !== 200) {
    throw new Error("API request has failed");
  }
  const parsed = await response.json();
  const initiatives = parsed["initiativas"];
  return { props: { initiatives } };
}

interface Initiatives {
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
