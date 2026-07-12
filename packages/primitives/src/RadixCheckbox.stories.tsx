import type { Meta, StoryObj } from '@storybook/react';
import { RadixCheckbox } from '@spacedrive/primitives';

/**
 * `RadixCheckbox` is the accessible, Radix-backed checkbox (custom checkmark,
 * optional label). Prefer it over the raw `CheckBox` input for user-facing UI.
 */
const meta = {
  title: 'Primitives/RadixCheckbox',
  component: RadixCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    name: 'radix-checkbox',
    label: 'Accept terms',
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof RadixCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
