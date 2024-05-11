import { render } from '@testing-library/react';

import DetailedCard from './DetailedCard';

describe('DetailedCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailedCard />);
    expect(baseElement).toBeTruthy();
  });
});
