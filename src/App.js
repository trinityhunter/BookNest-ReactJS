import './App.css';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar';
import ViewBook from './components/ViewBook';
import SearchBook from './components/SearchBook'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar/>
      <Routes>
          <Route path='/' element={<BookForm/>} exact/>
          <Route path='/viewBooks' element={<ViewBook/>} />
          <Route path='/searchBook' element={<SearchBook/>} />
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
