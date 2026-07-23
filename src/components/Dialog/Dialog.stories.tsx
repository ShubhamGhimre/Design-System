import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta = {
  component: Dialog,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: {
    title: 'Confirm action',
    description: 'Are you sure you want to proceed with this action?',
    defaultOpen: true,
    children: (
      <div className="flex justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    ),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg', title: 'Delete account', description: 'This action cannot be undone. All data will be permanently removed.' },
};

export const WithoutDescription: Story = {
  args: { description: undefined },
};

export const WithTrigger: Story = {
  args: {
    defaultOpen: false,
    trigger: <Button variant="secondary">Open dialog</Button>,
    children: (
      <div className="flex justify-end gap-2">
        <Button variant="primary">Proceed</Button>
      </div>
    ),
  },
  play: async ({ canvas, canvasElement }) => {
    const trigger = canvas.getByRole('button', { name: /open dialog/i });
    await trigger.click();
    const dialog = await within(canvasElement.ownerDocument.body).findByRole('dialog');
    await expect(dialog).toBeVisible();
  },
};
