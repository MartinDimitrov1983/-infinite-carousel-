import React from 'react';
import { render } from '@testing-library/react';

import Image from './index';

test('Snapshot Image', () => {
  const { asFragment } = render(
    <Image
      src="https://i.pinimg.com/736x/5b/99/b3/5b99b3974c2d889fc1fb703b473394de.jpg"
      alt="Test"
      isActive={true}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
