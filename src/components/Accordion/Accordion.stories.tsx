import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const sampleItems = [
  { value: 'item-1', trigger: 'What is this design system?', content: 'It is a production-ready React component library built with Radix UI, Tailwind CSS, and TypeScript.' },
  { value: 'item-2', trigger: 'How do I install it?', content: 'Run npm install @design-system/core, then import the CSS and components.' },
  { value: 'item-3', trigger: 'Is it accessible?', content: 'Yes, all components use Radix UI primitives which handle keyboard navigation, focus management, and ARIA attributes.' },
];

const meta = {
  component: Accordion,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  args: {
    items: sampleItems,
    defaultValue: 'item-1',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {},
};

export const Multiple: Story = {
  args: { type: 'multiple', defaultValue: ['item-1', 'item-2'] },
};

export const Collapsible: Story = {
  args: { collapsible: true, defaultValue: undefined },
};
