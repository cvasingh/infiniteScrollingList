import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/home' element={<List />} />
    </Routes>
  </BrowserRouter>
}

export default App;
