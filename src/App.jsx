
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Update from './components/Update';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
      
      <Routes>
        
        <Route path='/' element={<Main/>}/>
        <Route path='update/:id' element={<Update/>}/>
      </Routes>

      <Footer/>
      
     
     
    </div>
  );
}

export default App;
