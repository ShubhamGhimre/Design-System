import type { Meta, StoryObj } from '@storybook/react-vite';
import { User, Settings, LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from './DropdownMenu';
import { Button } from '../Button/Button';

const meta = {
  component: DropdownMenu,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  args: {
    trigger: <Button variant="secondary">Open menu</Button>,
    children: (
      <>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="me-2 size-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="me-2 size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="me-2 size-4" />
          Log out
        </DropdownMenuItem>
      </>
    ),
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
};

export const WithIcons: Story = {
  args: { defaultOpen: true },
};
