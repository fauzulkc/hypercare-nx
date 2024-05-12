import type { Meta, StoryObj } from '@storybook/react';
import { DetailedCard } from './DetailedCard';

const meta: Meta<typeof DetailedCard> = {
  component: DetailedCard,
  title: 'DetailedCard',
};
export default meta;
type Story = StoryObj<typeof DetailedCard>;

export const Primary: Story = {
  args: {
    imageUrl:
      'https://images.pexels.com/photos/23516208/pexels-photo-23516208/free-photo-of-a-woman-in-a-white-dress-standing-in-the-woods.jpeg',
    firstName: 'David',
    lastName: 'Dell',
    role: 'Admin',
    joinDate: new Date(),
    description:
      'The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.The lorem text the section contain contains header having open andclose functionality. The lorem text the section contain contains header having open andclose functionality.',
  },
};
