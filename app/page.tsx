export default async function Home() {
  const fetching = async () => {
    const response = await fetch('https://portuguese-politics.herokuapp.com/parliament/initiatives?legislature=XV&event_phase=Vota%C3%A7%C3%A3o%20na%20generalidade&limit=20&offset=0')
    if (response.status !== 200) {
      throw new Error('API request has failed');
    }
    const parsed = await response.json()
    return parsed['initiativas'] as Initiatives[];
  }

  const initiatives: Initiatives[] = await fetching();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {initiatives.map(item => (
          <li key={item.iniciativa_id}>{item.iniciativa_titulo}</li>
        ))}
      </div>
    </main>
  )
}

interface Initiatives {
  iniciativa_id: string,
  iniciativa_fase: string,
  iniciativa_titulo: string,
  iniciativa_url: string,
  iniciativa_url_res: string,
  iniciativa_autor: string,
  iniciativa_autor_deputados_nomes: string,
  iniciativa_data: string,
  iniciativa_tipo: string,
  iniciativa_votacao_res: string,
  iniciativa_votacao_il: string,
  iniciativa_votacao_psd: string,
  iniciativa_votacao_be: string,
  iniciativa_votacao_pan: string,
  iniciativa_votacao_l: string,
  iniciativa_votacao_pcp: string,
  iniciativa_votacao_ps: string,
  iniciativa_votacao_ch: string
}
