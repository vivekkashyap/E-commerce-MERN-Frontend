import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Product Component </h1>} />
          <Route path="/add" element={<h1>Add Product Component </h1>} />
          <Route path="/update" element={<h1>Update Component </h1>} />
          <Route path="/logout" element={<h1> Logout Component </h1>} />
          <Route path="/profile" element={<h1>Profile Component </h1>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
