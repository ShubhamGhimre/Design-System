import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { Table, type Column } from './Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const data: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Dave Brown', email: 'dave@example.com', role: 'Editor', status: 'active' },
];

const columns: Column<User>[] = [
  { key: 'name', header: 'Name', cell: (row) => <span className="font-medium">{row.name}</span> },
  { key: 'email', header: 'Email', cell: (row) => row.email },
  { key: 'role', header: 'Role', cell: (row) => row.role },
  {
    key: 'status',
    header: 'Status',
    cell: (row) =>
      row.status === 'active' ? (
        <Badge variant="default" size="sm">Active</Badge>
      ) : (
        <Badge variant="secondary" size="sm">Inactive</Badge>
      ),
  },
];

const meta = {
  component: Table,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'striped'] },
  },
  args: {
    data,
    columns,
  },
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const Striped: Story = {
  args: { variant: 'striped' },
};
