import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from './Pages/Public/PublicRouter.js';
import './App.css'
// import AuthRouter from '@/Pages/Public/AuthRouter.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

