import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
  component: Select,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    hasError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Select a fruit',
    size: 'md',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: { defaultValue: 'banana' },
};

export const Small: Story = {
  args: { size: 'sm', defaultValue: 'apple' },
};

export const Large: Story = {
  args: { size: 'lg', placeholder: 'Choose option' },
};

export const Error: Story = {
  args: { hasError: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithDisabledOption: Story = {
  args: {
    defaultValue: 'apple',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'orange', label: 'Orange' },
    ],
  },
};
