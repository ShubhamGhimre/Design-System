import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Search } from 'lucide-react';
import { Input } from './Input';

const meta = {
  component: Input,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    hasError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    hasError: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Enter your name' },
};

export const WithLeadingIcon: Story = {
  args: { placeholder: 'Search...' },
  render: (args) => <Input {...args} leadingIcon={<Search className="size-4" />} />,
};

export const Error: Story = {
  args: { placeholder: 'Email address', hasError: true, defaultValue: 'invalid' },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveClass('border-danger');
  },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled input', disabled: true },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeDisabled();
  },
};

export const Small: Story = {
  args: { placeholder: 'Small', size: 'sm' },
};

export const Large: Story = {
  args: { placeholder: 'Large', size: 'lg' },
};
