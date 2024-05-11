import { render } from '@testing-library/react';

import UserCard from './UserCard';

describe('UserCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserCard />);
    expect(baseElement).toBeTruthy();
  });
});
