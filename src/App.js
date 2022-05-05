import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CompShowToDos from './ToDos/ShowToDos';
import CompCreateToDo from './ToDos/CreateToDo';
import CompUpdateToDo from './ToDos/UpdateToDo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<CompShowToDos/>}/>
            <Route path='/todo' element={<CompCreateToDo/>}/>
            <Route path='/todo/:id' element={<CompUpdateToDo/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
