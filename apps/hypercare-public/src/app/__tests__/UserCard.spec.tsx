// Test to check integration of UsersCard and UsersList
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserCard } from '@hypercare/ui/user-card';
import { User } from '@hypercare/types';

const user: User = {
  id: '1',
  firstname: 'Mocked',
  lastname: 'User',
  email: 'mock@user.com',
  role: 'mock-admin',
  avatar:
    'https://images.pexels.com/photos/23516208/pexels-photo-23516208/free-photo-of-a-woman-in-a-white-dress-standing-in-the-woods.jpeg',
  description: 'A mock user to be used for testing purposes',
  join_date: '2022-01-01',
  username: 'mockery',
};
describe('User Card Test with mock data', () => {
  //   Testing if UserCard has rendered with at least Loading State

  it('UserCard in Loading State', () => {
    render(<UserCard loading />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });
  //   Testing if UserCard has rendered with data and all the elements with appropriate data
  it('UserCard with data', () => {
    render(
      <UserCard
        buttonText="Read More"
        title={user.username}
        imageURL={user.avatar}
        imageAlt={user.firstname}
        description={user.description}
        onClick={() => null}
      />
    );
    const image = screen.getByRole('img');
    const title = screen.getByRole('heading', {
      name: 'mockery',
      level: 2,
    });
    const description = screen.getByText(
      'A mock user to be used for testing purposes'
    );
    const button = screen.getByRole('button', { name: 'Read More' });

    expect(image).toBeDefined();
    expect(title).toBeDefined();
    expect(description).toBeDefined();
    expect(button).toBeDefined();
  });
});
