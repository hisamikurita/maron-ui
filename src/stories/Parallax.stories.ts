import type { Meta, StoryObj } from '@storybook/react';
import { Parallax } from '../components/animations/parallax';

const meta = {
    title: 'Example/Test',
    component: Parallax,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Parallax>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const Primary: Story = {};