import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: 'UserCard',
};
export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UserCard!/gi)).toBeTruthy();
  },
};
