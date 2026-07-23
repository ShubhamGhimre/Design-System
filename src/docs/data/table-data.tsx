import { Badge } from '../../components'
import type { Column } from '../../components'

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export const tableData: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer' },
]

export const tableColumns: Column<User>[] = [
  { key: 'name', header: 'Name', cell: (row) => row.name },
  { key: 'email', header: 'Email', cell: (row) => row.email },
  {
    key: 'role',
    header: 'Role',
    cell: (row) => <Badge variant="secondary" size="sm">{row.role}</Badge>,
  },
]
