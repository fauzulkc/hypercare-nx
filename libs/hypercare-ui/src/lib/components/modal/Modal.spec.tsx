import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal onClose={() => null}> </Modal>);
    expect(baseElement).toBeTruthy();
  });
});
