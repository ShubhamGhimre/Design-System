import type { Meta, StoryObj } from '@storybook/react-vite';

import { expect } from 'storybook/test';

import { ArrowRight, Plus } from '../../icons';
import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Button',
    loading: false,
    iconOnly: false,
    size: 'md',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary action',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary action',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost action',
    variant: 'ghost',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete item',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Small button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large button',
    size: 'lg',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Next step',
    variant: 'secondary',
  },
  render: (args) => <Button {...args} leadingIcon={<ArrowRight aria-hidden="true" />} />,
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    'aria-label': 'Add item',
    variant: 'ghost',
  },
  render: (args) => <Button {...args} leadingIcon={<Plus aria-hidden="true" />} />,
};

export const Loading: Story = {
  args: {
    children: 'Saving changes',
    loading: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /saving changes/i });

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-busy', 'true');
  },
};

export const CssCheck: Story = {
  args: {
    children: 'Tokens',
    variant: 'primary',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /tokens/i });
    const cs = getComputedStyle(button);
    await expect(cs.getPropertyValue('--color-surface').trim()).toBeTruthy();
  },
};