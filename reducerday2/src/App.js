
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
import ShowComplete from './componets/ShowComplete';
import ShowUnComplete from './componets/ShowUnComplete';
import CounterApp from './pages/CounterApp';
import EditPage from './pages/EditPage';
import TodoApp from './pages/TodoApp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<CounterApp/>} />
        <Route path = "/todoapp" element = {<TodoApp/>} />
        <Route path='/showCompleteTask' element ={<ShowComplete/>}/>
        <Route path='/showUnCompleteTask' element ={<ShowUnComplete/>}/>
        <Route path='/todo/:id/edit' element ={<EditPage/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
