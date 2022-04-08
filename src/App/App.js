import { Route, Routes } from 'react-router-dom';
import HomeMaster from '../pages/HomeMaster';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeMaster />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
