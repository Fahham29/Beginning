import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './home';
import Video from './video';
import './flex.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <h3>React App</h3>
       <Home /> */}
  <BrowserRouter>
  <Routes>
    <Route exact path='/'element={<Home/>}></Route>
    <Route exact path='/Video' element = {<Video/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
