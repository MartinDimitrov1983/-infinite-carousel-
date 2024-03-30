import React from 'react';
import { render } from '@testing-library/react';

import ImageSlider from './index';

test('Snapshot Input', () => {
  const { asFragment } = render(
    <ImageSlider
      images={[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU',
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      ]}
      currentImageIndex={2}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
