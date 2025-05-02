import type { Meta, StoryObj } from '@storybook/react';
import { Test } from '../components/test';

const meta = {
    title: 'Example/Test',
    component: Test,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof Test>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Test',
  },
};