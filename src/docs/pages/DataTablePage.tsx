import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

interface User {
  name: string
  email: string
  role: string
}

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
]

const data: User[] = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'User' },
  { name: 'Charlie', email: 'charlie@example.com', role: 'Editor' },
  { name: 'Diana', email: 'diana@example.com', role: 'User' },
  { name: 'Eve', email: 'eve@example.com', role: 'Viewer' },
]

export function DataTablePage() {
  return (
    <ComponentDoc
      name="DataTable" description="Powerful data table with sorting, pagination, and filtering built on @tanstack/react-table."
      preview={
        <div className="w-full max-w-2xl">
          <DataTable columns={columns} data={data} pageSize={5} />
        </div>
      }
      code={`import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/_components/DataTable'

interface User { name: string; email: string; role: string }

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
]

const data: User[] = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'User' },
]

<DataTable columns={columns} data={data} pageSize={10} />`}
      props={[
        { name: 'columns', type: 'ColumnDef<TData, TValue>[]', defaultVal: '—', description: 'Column definitions for the table' },
        { name: 'data', type: 'TData[]', defaultVal: '—', description: 'Array of data rows' },
        { name: 'pageSize', type: 'number', defaultVal: '10', description: 'Number of rows per page' },
        { name: 'enableSorting', type: 'boolean', defaultVal: 'true', description: 'Enables column sorting' },
        { name: 'enablePagination', type: 'boolean', defaultVal: 'true', description: 'Enables pagination controls' },
      ]}
    />
  )
}
