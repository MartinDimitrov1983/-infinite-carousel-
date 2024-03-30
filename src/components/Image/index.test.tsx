import React from 'react';
import { render } from '@testing-library/react';

import Image from './index';

test('Snapshot Input', () => {
  const { asFragment } = render(<Image src="" alt="" isActive={true} />);
  expect(asFragment()).toMatchSnapshot();
});
