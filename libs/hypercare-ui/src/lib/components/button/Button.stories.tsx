import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';
const meta: Meta<typeof ButtonProps> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
};
