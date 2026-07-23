import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Badge } from './Badge';

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'secondary', 'destructive', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    children: { control: 'text' },
  },
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Published' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Draft' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Deleted' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Archived' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'New' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Feature flag' },
};

export const CssCheck: Story = {
  args: { children: 'Theme check', variant: 'default' },
  play: async ({ canvas }) => {
    const badge = canvas.getByText('Theme check');
    const cs = getComputedStyle(badge);
    await expect(cs.getPropertyValue('--color-primary').trim()).toBeTruthy();
  },
};
