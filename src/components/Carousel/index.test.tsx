import React from 'react';
import { render } from '@testing-library/react';

import Carousel from './index';

test('Snapshot Carousel', () => {
  const { asFragment } = render(
    <Carousel
      images={[
        'https://media.istockphoto.com/id/1173544006/photo/winding-road.jpg?s=612x612&w=0&k=20&c=_VMEnB08arEsLnbES0knQUWHPrCD8TQFCy99JC4RZIQ=',
        'https://i.pinimg.com/736x/5b/99/b3/5b99b3974c2d889fc1fb703b473394de.jpg',
      ]}
      height={50}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
