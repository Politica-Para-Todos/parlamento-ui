'use client';
import { Table } from "antd";
import { Initiative } from "../Initiatives/FetchInitiatives";

interface InitiativeTableProps {
  data: Initiative[]
}

export default function InitiaitiveTable({data}: InitiativeTableProps) {
  return <Table
      dataSource={insertTableData(data)}
      columns={[
        {
          title: 'Autor',
          dataIndex: 'author',
          key: 'author',
          align: 'center'
        },
        {
          title: 'Iniciativa',
          dataIndex: 'initiative',
          key: 'initiative',
          align: 'left'
        },
        {
          title: 'Tipo',
          dataIndex: 'type',
          key: 'type',
          align: 'center',
          width: 150
        },
        {
          title: 'Data',
          dataIndex: 'date',
          key: 'date',
          align: 'center'
        },
      ]}
    >
    </Table>
}

const insertTableData = (data: Initiative[]) => {
  return data.map(row => {
    return {
      key: row.iniciativa_id,
      author: row.iniciativa_autor,
      initiative: row.iniciativa_titulo,
      type: row.iniciativa_tipo,
      date: row.iniciativa_data
    }
  })
}
