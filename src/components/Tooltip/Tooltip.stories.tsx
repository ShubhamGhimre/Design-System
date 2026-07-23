import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta = {
  component: Tooltip,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
  },
  args: {
    content: 'This is a tooltip',
    children: <Button variant="secondary">Hover me</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: { side: 'top' },
};

export const Bottom: Story = {
  args: { side: 'bottom' },
};

export const LongContent: Story = {
  args: { content: 'This is a much longer tooltip with more information about the action' },
};
