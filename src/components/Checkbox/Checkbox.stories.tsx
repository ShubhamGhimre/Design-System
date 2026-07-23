import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Accept terms',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {},
};

export const Checked: Story = {
  args: { checked: true },
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toBeChecked();
  },
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithoutLabel: Story = {
  args: { label: undefined, 'aria-label': 'Toggle setting' },
};
