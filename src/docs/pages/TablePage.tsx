import { Table } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'
import { tableData, tableColumns } from '../data/table-data'

export function TablePage() {
  return (
    <ComponentDoc
      name="Table" description="Displays rows of structured data with optional striped variant."
      preview={<Table data={tableData.slice(0, 2)} columns={tableColumns} />}
      code={`const columns = [
  { key: "name", header: "Name", cell: (row) => row.name },
  { key: "role", header: "Role", cell: (row) => row.role },
];

return <Table data={data} columns={columns} />`}
      props={[
        { name: 'data', type: 'T[]', defaultVal: '—', description: 'Array of data objects' },
        { name: 'columns', type: 'Column<T>[]', defaultVal: '—', description: 'Column definitions with key, header, cell' },
        { name: 'variant', type: '"default" | "striped"', defaultVal: '"default"', description: 'Table variant' },
      ]}
      variants={
        <Row label="Variants">
          <div className="w-full"><Table data={tableData} columns={tableColumns} variant="default" /></div>
          <div className="w-full"><Table data={tableData} columns={tableColumns} variant="striped" /></div>
        </Row>
      }
    />
  )
}
