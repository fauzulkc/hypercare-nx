// Test to check integration of UsersCard and UsersList
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { User } from '@hypercare/types';
import { UsersList } from '../components/UsersCard/UsersList';
import { AppProviders } from '../providers/app-providers';
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
describe('UserCard to Modal Integration', () => {
  // Test User Click Interaction with UserCard to Open Modal, View Passed Data, and close Modal
  it('Should Test User Click Interaction with UserCard Button to Open Modal, View Passed Data, and close Modal', async () => {
    render(<UsersList users={[user]} />, {
      wrapper: AppProviders,
    });
    // Waiting for Mock API to trigger
    await waitFor(
      () => {
        return;
      },
      { timeout: 1000 }
    );
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'mockery',
    });
    expect(title).toBeDefined();
    const button = screen.getByRole('button', { name: 'View More' });
    expect(button).toBeDefined();
    await userEvent.click(button);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeDefined();
    const firstName = screen.getByRole('heading', {
      level: 2,
      name: /Mocked/i,
    });
    const lastName = screen.getByRole('heading', { level: 2, name: /User/i });
    const checkRole = screen.getByText(/mock-admin/);
    const joinDate = screen.getByText(/12\/31\/2021/);
    const description = screen.getAllByText(
      'A mock user to be used for testing purposes'
    );
    expect(firstName).toBeDefined();
    expect(lastName).toBeDefined();
    expect(checkRole).toBeDefined();
    expect(joinDate).toBeDefined();
    expect(description).toHaveLength(2); // Description from UserCard and Description from Modal
    const modalOverlay = screen.getByTestId('modal-overlay');
    await userEvent.click(modalOverlay);
    // On Clicking Overlay, Modal should be closed
    expect(modal).not.toBeVisible();
  });
});
