import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes} from 'react-router-dom' ;
import { Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
function App() {
  const title ="Welcome to the new blog";
  const likes =50;
  //const person ={name:'yoshi',age:30};
  const link='http://www.google.com'
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
