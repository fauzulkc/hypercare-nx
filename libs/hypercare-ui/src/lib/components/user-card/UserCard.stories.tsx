import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';
import { Modal } from '../modal/Modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useEffect, useState } from 'react';
import DetailedCard from '../detailed-card/DetailedCard';

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: 'UserCard',
};
export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
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

const ButtonToOpenModal = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <Modal
          children={
            <DetailedCard
              description="The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality."
              firstName="David"
              lastName="Dell"
              role="Admin"
              joinDate={new Date()}
              imageUrl="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          }
          onClose={() => setModal(false)}
        />
      )}
      <UserCard
        imageURL="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="David Dell"
        buttonText="Read More"
        description="The lorem text the section contain contains header having open andclose functionality."
        imageAlt="David Dell' Photo"
        onClick={() => setModal(true)}
      ></UserCard>
    </>
  );
};

export const ActiveButtonModal: Story = {
  render: () => <ButtonToOpenModal />,
};
