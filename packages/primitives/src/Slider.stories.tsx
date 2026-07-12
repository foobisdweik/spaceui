import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@spacedrive/primitives';

const meta = {
  title: 'Primitives/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Stepped: Story = {
  args: {
    defaultValue: [40],
    step: 20,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
};
