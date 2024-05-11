import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import UserCard from '../user-card/UserCard';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary = {
  args: {
    children: (
      <UserCard
        title="David Dell"
        description="The lorem text the section contain contains header having open and close functionality."
        buttonText="Read More"
        imageURL="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="user image"
      />
    ),
  },
};
