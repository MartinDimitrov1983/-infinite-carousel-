import { Carousel } from './components';
import { images } from './utils';

function App() {
  return (
    <div style={{ marginTop: '100px' }}>
      <Carousel images={images} height={50} />
    </div>
  );
}

export default App;
