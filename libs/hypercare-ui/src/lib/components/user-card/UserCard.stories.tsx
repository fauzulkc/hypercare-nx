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
  args: {
    imageURL:
      'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'David Dell',
    imageAlt: "David Dell' Photo",
    description:
      'The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.',
    buttonText: 'Read More',
  },
};
