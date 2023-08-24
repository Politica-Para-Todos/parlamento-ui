import Link from "next/link";
import LayoutHeader from "../components/Headers/LayoutHeader";
import Hemicycle from "../components/Hemicycle/Hemicycle";
import { Deputy } from "../deputado/dto";
import { PartyAcronym, PartyColor } from "../partido/dto";

export default function Home() {
  const deputies = Array.from<Deputy>(Array());
  
  // Temporary deputies builder to populate hemicycle with all XV legislature parties 
  for (let i = 0; i < 116; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'NUNO SARAIVA',
      fullName: 'NUNO SANTOS SARAIVA',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.PS,
        name: 'Partido Socialista',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.PS
      },
      circle: 'BEJA',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 83; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'CARLOS RUI',
      fullName: 'CARLOS RUI MIGUEL',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.PSD,
        name: 'Partido Social Democrata',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.PSD
      },
      circle: 'GUARDA',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 11; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'CATARINA RAPOSO',
      fullName: 'ANA CATARINA RAPOSO',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.CH,
        name: 'Chega',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.CH
      },
      circle: 'LISBOA',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 8; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'AUGUSTO SOUSA',
      fullName: 'AUGUSTO RODRIGUES DE SOUSE',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.IL,
        name: 'Iniciativa Liberal',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.IL
      },
      circle: 'PORTO',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 6; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'MARTA VALENTE',
      fullName: 'MARTA CATARINA LOPES VALENTE',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.BE,
        name: 'Bloco de Esquerda',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.BE
      },
      circle: 'SETUBAL',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 4; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'JAIME PEREIRA',
      fullName: 'JAIME MARIA DA SILVA PEREIRA',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.PCP,
        name: 'Partido Comunista Português',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.PCP
      },
      circle: 'SETÚBAL',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 1; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'JOANA ALVES',
      fullName: 'JOANA PEREIRA COSTA ALVES',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.PAN,
        name: 'Partido Animais e Natureza',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.PAN
      },
      circle: 'GUARDA',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }
  for (let i = 0; i < 1; i++) {
    deputies.push({
      id: 123,
      firstLastName: 'RUI SILVA',
      fullName: 'RUI SILVA',
      parliamentaryGroup: {
        id: 1234,
        acronym: PartyAcronym.L,
        name: 'Livre',
        startDate: 'some-date',
        endDate: null,
        hexaColor: PartyColor.L
      },
      circle: 'LISBOA',
      situation: [
        {
          description: 'Efectivo',
          startDate: 'some-date',
          endDate: null
        }
      ],
      position: null,
      legislature: 'XV'
    });
  }

  return (
    <div>
      <LayoutHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Hemicycle width={800} deputies={deputies} seats={230} rows={6}/>
        </div>
        <div>
          <Link href='/iniciativas'>
            <h2>Iniciativas</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}
