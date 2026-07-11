import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@spacedrive/primitives';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    placeholder: 'Enter text…',
    variant: 'default',
    size: 'md',
    error: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Validation error state — red border and focus ring. */
export const Error: Story = {
  args: {
    placeholder: 'Invalid value',
    error: true,
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};
