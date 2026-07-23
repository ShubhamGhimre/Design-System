import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const sampleTabs = [
  { value: 'account', label: 'Account', content: <p>Account settings and preferences.</p> },
  { value: 'password', label: 'Password', content: <p>Change your password here.</p> },
  { value: 'notifications', label: 'Notifications', content: <p>Manage notification preferences.</p> },
];

const meta = {
  component: Tabs,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['underline', 'pills'] },
    defaultValue: { control: 'text' },
  },
  args: {
    tabs: sampleTabs,
    defaultValue: 'account',
    variant: 'underline',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: { variant: 'underline' },
};

export const Pills: Story = {
  args: { variant: 'pills' },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { value: 'tab-1', label: 'Active', content: <p>First tab content</p> },
      { value: 'tab-2', label: 'Disabled', content: <p>You cannot see this.</p>, disabled: true },
      { value: 'tab-3', label: 'Available', content: <p>Third tab content</p> },
    ],
  },
};
