import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta = {
  component: Popover,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
  },
  args: {
    trigger: <Button variant="secondary">Open popover</Button>,
    children: (
      <div className="flex flex-col gap-3">
        <p className="text-sm text-text">Popover content</p>
        <Button size="sm">Action</Button>
      </div>
    ),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
};

export const WithForm: Story = {
  args: {
    defaultOpen: true,
    children: (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-text">Edit profile</p>
        <Input placeholder="Name" size="sm" />
        <Button size="sm">Save</Button>
      </div>
    ),
  },
};
