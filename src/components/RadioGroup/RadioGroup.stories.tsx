import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';

const meta = {
  component: RadioGroup,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
  },
  args: {
    defaultValue: 'option-1',
    options: [
      { value: 'option-1', label: 'Option A' },
      { value: 'option-2', label: 'Option B' },
      { value: 'option-3', label: 'Option C' },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { orientation: 'vertical' },
};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'opt-1', label: 'Available' },
      { value: 'opt-2', label: 'Unavailable', disabled: true },
      { value: 'opt-3', label: 'Available too' },
    ],
  },
};
